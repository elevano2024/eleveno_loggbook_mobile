// SnackbarContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface SnackbarState {
  open: boolean;
  message: string;
  type: "info" | "success" | "error"; // Define types for snackbar
}

interface SnackbarContextType {
  snackbar: SnackbarState;
  updateSnackbar: (newSnackbar: Partial<SnackbarState>) => void;
  closeSnackbar: () => void;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
);

export const SnackbarProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    type: "info",
  });

  const updateSnackbar = (newSnackbar: Partial<SnackbarState>) => {
    setSnackbar((prev) => ({ ...prev, ...newSnackbar }));
  };

  const closeSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <SnackbarContext.Provider
      value={{ snackbar, updateSnackbar, closeSnackbar }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = (): SnackbarContextType => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};
