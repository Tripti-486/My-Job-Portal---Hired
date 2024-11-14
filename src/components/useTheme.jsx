import { useContext } from "react";
import { ThemeProviderContext } from "./theme-provider"; // Adjust the path if necessary

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};