import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function useThemeActions() {
  const { toggleTheme, toggleThemeMode } = useContext(ThemeContext);

  return { toggleTheme, toggleThemeMode };
}
