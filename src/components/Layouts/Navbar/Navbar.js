import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <nav className={`${styles.navbar} ${styles[`bg-${themeCtx.bgTheme}`]}`}>
      <div className={`${styles["navbar-container"]}`}>
        <p className={`${styles["navbar-brand"]}`}>ReactJs</p>
        <form>
          <p>Light</p>
          <label className={styles.switch}>
            <input name="bgTheme" type="checkbox" onChange={themeCtx.changeBgThemeHandler} checked={themeCtx.bgTheme === "dark" ? true : false} />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
          <p>Dark</p>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
