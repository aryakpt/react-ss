import React from "react";
import styles from "./UserManualList.module.css";

const UserManualList = ({ users }) => {
  return (
    <>
      {users.map((user, i) => {
        return (
          <div className={styles["user-list"]} key={i}>
            <p>Nama: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
          </div>
        );
      })}
    </>
  );
};

export default UserManualList;
