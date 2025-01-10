import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    dark: {
      h1: {
        backgroundColor: "red",
        color: "green",
        borderWidth: 5,
        borderStyle: "dotted",
        borderColor: "green",
      },
      button: {
        padding: "0.6em 1.2em",
        borderRadius: 8,
        border: "1px solid transparent",
        fontSize: "1em",
        fontWeight: 500,
        fontFamily: "inherit",
        cursor: "pointer",
        transition: "border-color 0.25s",
        paddingRight: 10,
        paddingLeft: 10,
        marginRight: 5,
      },
      toast: {
        success: { backgroundColor: "green", color: "white" },
        error: { backgroundColor: "red", color: "white" },
      },
    },
    light: {},
  });

  function toggleTheme() {
    const themeProcessed = getTheme();
    const currentColor = themeProcessed.h1.color;
    const currentBackgroundColor = themeProcessed.h1.backgroundColor;

    setTheme({
      ...theme,
      dark: {
        ...themeProcessed,
        h1: {
          ...themeProcessed.h1,
          backgroundColor: currentColor,
          color: currentBackgroundColor,
          borderColor: currentBackgroundColor,
        },
      },
    });
  }

  function getTheme() {
    return theme.dark;
  }

  return (
    <ThemeContext.Provider
      value={{ selectors: { getTheme }, actions: { toggleTheme } }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

/* 
const providedData = new WeakMap();
function provide(key, value) {
    providedData.set(key, value);
}
const ThemeContext = {
  Provider: function ({ value }) {
    React.provide(this, value);
  },
  Consumer: function () {
    return providedData.get(this);
  }
};
 */
