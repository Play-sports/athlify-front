import { createContext, useContext, useState, ReactNode } from "react";

interface AuthModalContextType {
  showSignUp: boolean;
  openSignUp: () => void;
  closeSignUp: () => void;
}

const AuthModalContext = createContext<AuthModalContextType | undefined>(
  undefined
);

export function AuthModalProvider({ children }: { children: ReactNode }) {
  const [showSignUp, setShowSignUp] = useState(false);

  const openSignUp = () => setShowSignUp(true);
  const closeSignUp = () => setShowSignUp(false);

  return (
    <AuthModalContext.Provider value={{ showSignUp, openSignUp, closeSignUp }}>
      {children}
    </AuthModalContext.Provider>
  );
}

export function useAuthModal() {
  const context = useContext(AuthModalContext);
  if (!context) {
    throw new Error("useAuthModal must be used within an AuthModalProvider");
  }
  return context;
}
