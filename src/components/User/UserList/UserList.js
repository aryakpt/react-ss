import React from "react";
import styles from "./UserList.module.css";
import { Card } from "../../";
const UserList = ({ users }) => {
  return (
    <ul className={`${styles["user-list"]}`}>
      {users.map((user, i) => {
        return (
          <li key={i}>
            <Card>
              <p>
                <b>{user.name}</b>
              </p>
              <p>{user.age}</p>
            </Card>
          </li>
        );
      })}
    </ul>
  );
};

export default UserList;
