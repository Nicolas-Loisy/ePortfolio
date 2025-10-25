import React, { useEffect, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useTheme } from "styled-components";

interface AnchorNavArrowsProps {
  anchors: string[];
}

function getCurrentAnchor(anchors: string[]) {
  let minDist = Infinity;
  let idx = 0;
  for (let i = 0; i < anchors.length; i++) {
    const el = document.getElementById(anchors[i]);
    if (el) {
      const dist = Math.abs(el.getBoundingClientRect().top);
      if (dist < minDist) {
        minDist = dist;
        idx = i;
      }
    }
  }
  return idx;
}

const AnchorNavArrows: React.FC<AnchorNavArrowsProps> = ({ anchors }) => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const { theme } = useTheme() as { theme: string };
  const dark = theme === "dark";

  useEffect(() => {
    const onScroll = () => {
      setCurrent(getCurrentAnchor(anchors));
      setVisible(window.innerWidth >= 1024);
    };
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [anchors]);

  const goTo = (idx: number) => {
    if (idx < 0 || idx >= anchors.length) return;
    if (idx === 0) {
      const home = document.getElementById("home");
      if (home) {
        home.scrollIntoView({ behavior: "smooth" });
        return;
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (idx === anchors.length - 1) {
      const el = document.getElementById(anchors[idx]);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          const rect = el.getBoundingClientRect();
          if (rect.top > 0) {
            window.scrollBy({ top: rect.top, behavior: "smooth" });
          }
        }, 400);
        return;
      }
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(anchors[idx]);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!visible) return null;

  const btnStyle = {
    background: dark ? "#23272f" : "#e0e0e0",
    border: dark ? "1px solid #444" : "1px solid #bbb",
    borderRadius: "50%",
    width: 44,
    height: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: dark
      ? "0 2px 8px rgba(0,0,0,0.32)"
      : "0 2px 8px rgba(0,0,0,0.12)",
    cursor: "pointer" as const,
    color: dark ? "#fff" : "#222",
    transition: "background 0.2s, color 0.2s, border 0.2s, opacity 0.2s",
    opacity: 1,
  };

  return (
    <div
      style={{
        position: "fixed",
        right: 24,
        bottom: 24,
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <button
        onClick={() => goTo(current - 1)}
        disabled={current === 0}
        style={{
          ...btnStyle,
          cursor: current === 0 ? "not-allowed" : "pointer",
          opacity: current === 0 ? 0.3 : 1,
        }}
        aria-label="Section précédente"
        tabIndex={current === 0 ? -1 : 0}
      >
        <FaChevronUp color={dark ? "#fff" : "#333"} />
      </button>
      <button
        onClick={() => goTo(current + 1)}
        disabled={current === anchors.length - 1}
        style={{
          ...btnStyle,
          cursor: current === anchors.length - 1 ? "not-allowed" : "pointer",
          opacity: current === anchors.length - 1 ? 0.3 : 1,
        }}
        aria-label="Section suivante"
        tabIndex={current === anchors.length - 1 ? -1 : 0}
      >
        <FaChevronDown color={dark ? "#fff" : "#333"} />
      </button>
    </div>
  );
};

export default AnchorNavArrows;
