import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ChristmasContextType {
  isChristmasMode: boolean;
  isDecemberMonth: boolean;
  toggleChristmasMode: () => void;
}

const ChristmasContext = createContext<ChristmasContextType | undefined>(
  undefined,
);

const isDecember = (): boolean => {
  const now = new Date();
  return now.getMonth() === 11; // Décembre
};

export const ChristmasProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const isDecemberMonth = isDecember();

  const [isChristmasMode, setIsChristmasMode] = useState<boolean>(() => {
    if (!isDecemberMonth) return false;
    const saved = localStorage.getItem("christmasMode");
    if (saved !== null) {
      return saved === "true";
    }
    return true;
  });

  useEffect(() => {
    if (isDecemberMonth) {
      localStorage.setItem("christmasMode", String(isChristmasMode));
    }
  }, [isChristmasMode, isDecemberMonth]);

  const toggleChristmasMode = () => {
    setIsChristmasMode((prev) => !prev);
  };

  return (
    <ChristmasContext.Provider
      value={{ isChristmasMode, isDecemberMonth, toggleChristmasMode }}
    >
      {children}
    </ChristmasContext.Provider>
  );
};

export const useChristmas = (): ChristmasContextType => {
  const context = useContext(ChristmasContext);
  if (!context) {
    throw new Error("useChristmas must be used within a ChristmasProvider");
  }
  return context;
};
