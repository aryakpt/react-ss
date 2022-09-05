import React from "react";
import styles from "./Modal.module.css";

import { Button } from "../";
const Modal = ({ title, message, onClick }) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={onClick}>
        <div className={styles.modal}>
          <header className={styles.header}>
            <h2>{title}</h2>
          </header>
          <main className={styles.body}>
            <p>{message}</p>
          </main>
          <footer className={styles.footer}>
            <Button className={`btn btn-primary`} onClick={onClick}>
              Okay
            </Button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Modal;
