import React, { useState, useEffect } from "react";
import { Section2, UserList, UserForm, UserManualList } from "../../components";
import styles from "./Home.module.css";

const Home = () => {
  const name = "Arya Krisna Putra";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  // console.log(users);
  const fetchUsers = async function () {
    fetch("https://gorest.co.in/public/v2/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return setUsers([...data]);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const [manualUsers, setManualUsers] = useState([]);

  const onSaveManualUsersHandler = (user) => {
    setManualUsers((prevState) => [user, ...prevState]);
  };

  return (
    <React.Fragment>
      <div className={styles.home}>
        <section className={`${styles["home-task-1"]}`}>
          <h1>Hello my name is {name}</h1>
        </section>
        <section className={`${styles["home-task-2"]}`}>
          <Section2 fullName={name} />
        </section>
        <section className={`${styles["home-api-task"]}`}>
          <h2 className={`${styles["home-api-task__title"]}`}>API Request in React</h2>
          <UserList users={users} />
        </section>
        <section className={`${styles["home-form-task"]}`}>
          <h2 className={`${styles["home-form-task__title"]}`}>React Form</h2>
          <UserForm onSave={onSaveManualUsersHandler} />
          <UserManualList users={manualUsers} />
        </section>
      </div>
    </React.Fragment>
  );
};

export default Home;
