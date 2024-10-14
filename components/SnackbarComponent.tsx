// YourMainComponent.tsx
import { useSnackbar } from "@/context/SnackbarContext";
import React from "react";
import { Snackbar } from "react-native-paper";

const SnackbarComponent: React.FC = () => {
  const { snackbar, closeSnackbar } = useSnackbar();
  const variantStyles = {
    info: { backgroundColor: "#2196F3" }, // Light Blue
    success: { backgroundColor: "#4CAF50" }, // Dark Green
    warning: { backgroundColor: "#FF9800" }, // Dark Orange
    error: { backgroundColor: "#F44336" }, // Dark Red
  };

  return (
    <Snackbar
      visible={snackbar.open} // Control visibility with snackbar state
      onDismiss={closeSnackbar} // Close on dismiss
      action={{
        label: "Close", // Action button text
        onPress: closeSnackbar, // Close snackbar when button is pressed
      }}
      style={variantStyles[snackbar.type]} // Apply style based on variant
    >
      {snackbar.message}
    </Snackbar>
  );
};

export default SnackbarComponent;
