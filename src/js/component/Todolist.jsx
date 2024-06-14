import React, { useState } from "react";
import Icono from './Icono'

//Add into array -> concat
// Delete from arry -> filter
// Update -> map

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDos, setToDos] = useState([]);
  return (
    <div class="container todo-container">
     <div className="centerIcon"><Icono /></div> 
    <div class="task-count"> {toDos.length} Task(s)</div>
    <h1 class="todo-header">My To Do List</h1>
    <ul class="list-group">
      <li class="list-group-item">
        <input
          type="text"
          class="form-control todo-input"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          onKeyUp={(e) =>
            e.key === "Enter" ? setToDos(toDos.concat(inputValue)) : null
          }
          placeholder="✍️ What do you need to do?"
        />
      </li>
      {toDos.map((items, index) => (
        <li class="list-group-item todo-item">
          {items}{" "}
          <i
            class="fas fa-trash-alt"
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
