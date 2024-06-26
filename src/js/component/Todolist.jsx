import React, { useState } from "react";
import Icono from "./Icono";

// Add into array -> concat
// Delete from array -> filter
// Update -> map

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDos, setToDos] = useState([]);
  const handleClearAll = () => {
    setToDos([]);
  };
  return (
    <div className="container todo-container">
      <div className="row">
        <div className="col">
          {toDos.length > 0 && (
            <button className="btn btn-danger mt-3" onClick={handleClearAll}>
              Delete All
            </button>
          )}
        </div>
        <div className="col centerIcon">
          <Icono />
        </div>
        <div className="col task-count"> {toDos.length} Task(s)</div>
      </div>
      <h1 className="todo-header">My To Do List</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <input
            type="text"
            className="form-control todo-input"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyUp={(e) => {
              if (e.key === "Enter" && inputValue.trim() !== "") {
                setToDos((prevToDos) => {
                  return prevToDos.concat(inputValue);
                });
                setInputValue("");
              }
            }}
            placeholder="✍️ What do you need to do?"
          />
        </li>
        {toDos.map((items, index) => (
          <li className="list-group-item todo-item" key={index}>
            {items}
            <i
              className="fas fa-trash-alt icon-hide"
              onClick={() =>
                setToDos(
                  toDos.filter((t, currentIndex) => index !== currentIndex)
                )
              }
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
