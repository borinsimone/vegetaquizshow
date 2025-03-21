import { createContext, useContext, ReactNode, useState } from 'react';

// Define the shape of your context state
interface GlobalContextState {
  score: number;
  setScore: (score: number) => void;
  currentQuestion: number;
  setCurrentQuestion: (question: number) => void;
  isGameActive: boolean;
  setIsGameActive: (active: boolean) => void;
}

// Create the context with an initial undefined value
const GlobalContext = createContext<GlobalContextState | undefined>(undefined);

// Create a provider component
interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);

  const value = {
    score,
    setScore,
    currentQuestion,
    setCurrentQuestion,
    isGameActive,
    setIsGameActive,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

// Create a custom hook to use the context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

export default GlobalContext;
