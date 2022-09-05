import React, { useState } from "react";
import "./App.css";
import { UserForm, UserList } from "./components";

function App() {
  const [users, setUsers] = useState([]);

  const onSaveHandler = (input) => {
    setUsers((prevState) => {
      return [input, ...prevState];
    });
  };

  return (
    <div>
      <UserForm onSave={onSaveHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
