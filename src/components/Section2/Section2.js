import React, { useState, useEffect } from "react";
import "./Section2.css";
import { Button } from "../UI";

function Section2({ fullName }) {
  const [name, setName] = useState(fullName);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count} ${name}`;
  }, [name, count]);

  const onClickHandler = () => {
    setName("New Name");
  };
  const onReduceHandler = () => {
    setCount(count - 1);
  };
  const onAddHandler = () => {
    setCount(count + 1);
  };

  return (
    <div className="section-2">
      <div className="container">
        <h2 className="section-2__title">React Static and Events</h2>
        <div className="section-2__task">
          <div className="section-2__task__name">
            <p>
              Hi! My name is <b>{name}</b>
            </p>
            <Button className="btn-red" onClick={onClickHandler}>
              Change Name
            </Button>
          </div>
          <hr />
          <div className="section-2__task__count">
            <p>Current number of counters: {count}</p>
            <Button className="btn-secondary" onClick={onReduceHandler}>
              Decrement
            </Button>
            <Button className="btn-primary" onClick={onAddHandler}>
              Increment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
