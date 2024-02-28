import { faker } from "@faker-js/faker";
import { createContext, useState } from "react";

const defaultTheme = {
  mode: "light",
  light: {
    h1: {
      backgroundColor: faker.color.human(),
      color: faker.color.human(),
      border: "5px solid green",
    },
    button: {
      backgroundColor: faker.color.human(),
      color: faker.color.human(),
    },
  },
  dark: {
    h1: {
      backgroundColor: faker.color.human(),
      color: faker.color.human(),
      border: "5px solid red",
    },
    button: {
      backgroundColor: faker.color.human(),
      color: faker.color.human(),
    },
  },
};

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    const oldH1Color = theme[theme.mode].h1.color;
    const oldButtonColor = theme[theme.mode].button.color;
    const oldH1BackgroundColor = theme[theme.mode].h1.backgroundColor;
    const oldButtonBackgroundColor = theme[theme.mode].button.backgroundColor;

    const newTheme = {
      ...theme,
      [theme.mode]: {
        ...theme[theme.mode],
        h1: {
          ...theme[theme.mode].h1,
          color: oldH1BackgroundColor,
          backgroundColor: oldH1Color,
        },
        button: {
          ...theme[theme.mode].button,
          color: oldButtonBackgroundColor,
          backgroundColor: oldButtonColor,
        },
      },
    };

    setTheme(newTheme);
  };

  const toggleThemeMode = () =>
    console.log(theme.mode) ||
    setTheme((currentTheme) => ({
      ...currentTheme,
      mode: currentTheme.mode === "light" ? "dark" : "light",
    }));

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, toggleTheme, toggleThemeMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
