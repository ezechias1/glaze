import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChnage(event) {
    setNewTask(event.target.value);
  }

  function addTask() {


  if(newTask.trim() !==""){
    setNewTask([...t, newTask])
  setNewTask("")}}

  function deleteTask(index) {
    const updatedtasks= tasks.filter((_, i) =>i !==index)
    setNewTask(updatedtasks); 
  }

  function moveTaskUp(index) {
if(index > 0){
  const updatedtasks= [...tasks];
  [updatedtasks[index], updatedtasks[index-1]]=
  [updatedtasks[index-1], updatedtasks[index]];
  setTasks(updatedtasks)
}

  }

  function moveTaskDown(index) {

    if(index < tasks.length -1){
      const updatedtasks= [...tasks];
      [updatedtasks[index], updatedtasks[index + 1]]=
      [updatedtasks[index + 1], updatedtasks[index]];
      setTasks(updatedtasks)
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task...."
          value={newTask}
          onChnage={handleInputChnage}
        />
        <button className="add-button" onClick={addTask}>
          Add Task
        </button>
      </div>

      <ol>
        {tasks.map((tasks, index) => (
          <li key={index}>
            <span className="text">{tasks}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>

            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
