import React, { useState } from "react";
import Icono from './Icono'

//Add into array -> concat
// Delete from arry -> filter
// Update -> map

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDos, setToDos] = useState([]);
  return (
    <div className="container todo-container">
     <div className="centerIcon"><Icono /></div> 
    <div className="task-count"> {toDos.length} Task(s)</div>
    <h1 className="todo-header">My To Do List</h1>
    <ul className="list-group">
      <li className="list-group-item">
        <input
          type="text"
          className="form-control todo-input"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}

         //  onKeyUp={(e) =>
         //    e.key === "Enter" ? setToDos(toDos.concat(inputValue)) : null
         //  }

         onKeyUp={(e) => {
            if (e.key === 'Enter' && inputValue.trim() !== '') {
              setToDos((prevToDos) => {
                return prevToDos.concat(inputValue); 
              });
              setInputValue('');
            }
          }}
          
          placeholder="✍️ What do you need to do?"
        />
      </li>
      {toDos.map((items, index) => (
        <li className="list-group-item todo-item">
          {items}{" "}
          <i
            className="fas fa-trash-alt"
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
