import React from "react";
import styles from "./Modal.module.css";

import { Button } from "../";

const Backdrop = ({ onClick }) => {
  return <div className={styles.backdrop} onClick={onClick} />;
};

const ModalOverlay = ({ title, message, onClick }) => {
  return (
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
  );
};

const Modal = ({ title, message, onClick }) => {
  return (
    <React.Fragment>
      <Backdrop onClick={onClick} />
      <ModalOverlay title={title} message={message} onClick={onClick} />
    </React.Fragment>
  );
};

export default Modal;
