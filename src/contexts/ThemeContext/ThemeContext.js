import React, { useState, createContext, useEffect } from "react";

const ThemeContext = createContext({ bgTheme: "", changeBgThemeHandler: () => {} });

const ThemeProvider = ({ children }) => {
  const [bgTheme, setBgTheme] = useState("light");

  const changeBgThemeHandler = (e) => {
    localStorage.setItem("BG_THEME", e.target.checked ? "dark" : "light");
    setBgTheme(e.target.checked ? "dark" : "light");
  };

  useEffect(() => {
    const LOCAL_BG_THEME = localStorage.getItem("BG_THEME");
    setBgTheme(LOCAL_BG_THEME === "dark" ? "dark" : "light");
  }, []);

  return <ThemeContext.Provider value={{ bgTheme: bgTheme, changeBgThemeHandler: changeBgThemeHandler }}>{children}</ThemeContext.Provider>;
};
export { ThemeContext, ThemeProvider };
