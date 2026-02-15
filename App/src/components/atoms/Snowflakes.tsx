import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";

const fall = keyframes`
  0% {
    transform: translateY(-5vh) translateX(0) rotate(0deg);
    opacity: 0.8;
  }
  20% {
    transform: translateY(15vh) translateX(8px) rotate(144deg);
  }
  40% {
    transform: translateY(35vh) translateX(-8px) rotate(288deg);
  }
  60% {
    transform: translateY(55vh) translateX(8px) rotate(432deg);
  }
  80% {
    transform: translateY(75vh) translateX(-8px) rotate(576deg);
  }
  100% {
    transform: translateY(105vh) translateX(0) rotate(720deg);
    opacity: 0.2;
  }
`;

const SnowContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
`;

interface SnowflakeProps {
  $left: number;
  $delay: number;
  $duration: number;
  $size: number;
  $opacity: number;
}

const Snowflake = styled.div<SnowflakeProps>`
  position: absolute;
  top: -10px;
  left: ${(props) => props.$left}%;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  background: radial-gradient(
    circle at 30% 30%,
    #ffffff 0%,
    #e3f2fd 40%,
    #bbdefb 100%
  );
  border-radius: 50%;
  opacity: ${(props) => props.$opacity};
  animation: ${fall} ${(props) => props.$duration}s linear infinite;
  animation-delay: ${(props) => props.$delay}s;
  box-shadow:
    0 0 ${(props) => props.$size}px rgba(255, 255, 255, 0.8),
    0 0 ${(props) => props.$size * 2}px rgba(79, 195, 247, 0.4),
    inset 0 0 ${(props) => props.$size / 3}px rgba(255, 255, 255, 0.9);
  filter: blur(0.5px);
`;

const Snowflakes: React.FC = () => {
  const snowflakes = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 10 + Math.random() * 15,
      size: 2 + Math.random() * 4,
      opacity: 0.5 + Math.random() * 0.5,
    }));
  }, []);

  return (
    <SnowContainer>
      {snowflakes.map((flake) => (
        <Snowflake
          key={flake.id}
          $left={flake.left}
          $delay={flake.delay}
          $duration={flake.duration}
          $size={flake.size}
          $opacity={flake.opacity}
        />
      ))}
    </SnowContainer>
  );
};

export default Snowflakes;
