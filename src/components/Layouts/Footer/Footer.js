import React, { useContext } from "react";
import styles from "./Footer.module.css";

import { ThemeContext } from "../../../contexts";

const Footer = ({ name }) => {
  const themeCtx = useContext(ThemeContext);

  return (
    <div className={`${styles.footer} ${styles[`footer-${themeCtx.bgTheme}`]}`}>
      <div className={`${styles[`footer-container`]}`}>
        <div className={styles.footer__title}>
          <p>{name ? `My name is ${name}, and today I'm learning about react` : "Today I'm Learning React"}</p>
        </div>
        <div className={styles.footer__content}></div>
      </div>
    </div>
  );
};

export default Footer;
