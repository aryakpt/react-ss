import React, { useState, useEffect } from "react";
import "./Section2.css";

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
            <button className="btn btn-red" onClick={onClickHandler}>
              Change Name
            </button>
          </div>
          <hr />
          <div className="section-2__task__count">
            <p>Current number of counters: {count}</p>
            <button className="btn btn-secondary" onClick={onReduceHandler}>
              Decrement
            </button>
            <button className="btn btn-primary" onClick={onAddHandler}>
              Increment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
