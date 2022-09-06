import React from "react";
import { Section2 } from "../../components";
import styles from "./Home.module.css";

const Home = () => {
  const name = "Arya Krisna Putra";
  return (
    <React.Fragment>
      <section className="home">
        <section className={`${styles["home-task-2"]}`}>
          <h1>Hello my name is {name}</h1>
          <Section2 fullName={name} />
        </section>
      </section>
    </React.Fragment>
  );
};

export default Home;
