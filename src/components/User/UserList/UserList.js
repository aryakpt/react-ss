import React, { useState } from "react";
import styles from "./UserList.module.css";
import { Button } from "../../UI";

const UserList = ({ users }) => {
  const [num, setNumber] = useState({ prev: 0, next: 5 });

  const prevPage = () => {
    if (num.prev > 0) {
      setNumber((prevState) => {
        return { prev: prevState.prev - 5, next: prevState.next - 5 };
      });
    }
  };

  const nextPage = () => {
    if (num.next < users.length) {
      setNumber((prevState) => {
        return { prev: prevState.prev + 5, next: prevState.next + 5 };
      });
    }
  };

  return (
    <div className={styles["user-list"]}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Email</th>
            <th>Jenis Kelamin</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.slice(num.prev, num.next).map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles["user-list__button"]}>
        <Button className={`btn-primary`} onClick={prevPage}>
          Prev
        </Button>
        <Button className={`btn-primary`} onClick={nextPage}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default UserList;
