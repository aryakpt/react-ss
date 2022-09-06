import React, { useState, createContext } from "react";

const ThemeContext = createContext({ bgTheme: "", changeBgThemeHandler: () => {} });

const ThemeProvider = ({ children }) => {
  const [bgTheme, setBgTheme] = useState("light");

  const changeBgThemeHandler = (e) => {
    // console.log(e.target.checked);
    setBgTheme(e.target.checked ? "dark" : "light");
  };

  console.log(bgTheme);
  return <ThemeContext.Provider value={{ bgTheme: bgTheme, changeBgThemeHandler: changeBgThemeHandler }}>{children}</ThemeContext.Provider>;
};
export { ThemeContext, ThemeProvider };
