import React from "react";
import styles from "./UserList.module.css";

const UserList = ({ users }) => {
  return (
    <div className={`${styles.user - list}`}>
      <ul>
        {users.map((user, i) => {
          return (
            <li key={i}>
              <p>{user.name}</p>
              <p>{user.age}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
