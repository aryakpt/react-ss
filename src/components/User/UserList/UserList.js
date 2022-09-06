import React from "react";
import styles from "./UserList.module.css";

const UserList = ({ users }) => {
  return (
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
        {users.map((user, index) => {
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
  );
};

export default UserList;
