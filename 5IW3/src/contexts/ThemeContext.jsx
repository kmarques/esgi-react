import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  h1: {
    backgroundColor: "green",
    color: "yellow",
    border: "2px dashed magenta",
  },
  button: {
    backgroundColor: "grey",
    color: "pink",
  },
});

import React from "react";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/themes?userId=1")
      .then((res) => res.json())
      .then((data) => setTheme(data[0].config));
  }, []);

  if (theme === undefined) {
    return <p>Loading...</p>;
  }

  if (theme === null) {
    return <p>Theme not found</p>;
  }

  function toggleH1() {
    const bgColor = theme.h1.backgroundColor;
    const color = theme.h1.color;

    setTheme({
      ...theme,
      h1: {
        ...theme.h1,
        backgroundColor: color,
        color: bgColor,
      },
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleH1 }}>
      {children}
    </ThemeContext.Provider>
  );
}
