import React, { useState, useEffect } from 'react';
import './ToDo.css';
import Task from './Task';

function ToDo() {

const [task, setTask] = useState({});
const [todos, setTodos] = useState([]);

function addTask(event) {
  const currentTask = {
    text: event.target.value,
    key: Date.now(),
    color: Math.floor(Math.random() * 7),
    rotate: Math.floor(Math.random() * 7)

  }
  setTask(currentTask);
}

function submitTask(event) {
  event.preventDefault();
  const newTodos = [task, ...todos];
  setTodos(newTodos);
}

const deleteTask = (key) => {
  const remove = [...todos].filter(task => task.key !== key)
  setTodos(remove)
}

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos))
},[todos]);

useEffect(() => {
  const local = localStorage.getItem('todos');
  if (local.type === undefined) {
    const firstTask = {
      text: "Adicione alguma tarefa!",
      key: Date.now(),
      color: 0,
      rotate: 0
    }
    const firstTodo = [firstTask, ...todos];
    setTodos(firstTodo);
  } else {
    const localTodos = [local, ...todos];
    setTodos(localTodos);
  }
},[]);

  return (
    <div className="flex-col">
      <h1 className="flex p-8 justify-center text-yellow-700 font-hand text-2xl font-black tracking-wider">
        My Sticky Board
      </h1>
      <form
        className="flex m-auto justify-center font-hand text-xl pb-4 shadow-xl"
        onSubmit={submitTask}>
        <input
          className="border-1 px-2 w-80 text-yellow-700 rounded-tl-xl"
          type="text"
          maxLength="85"
          onChange={addTask}
        />
        <button
          className="border-1 py-1 px-2 border-black bg-yellow-400 rounded-br-xl"
        >
          Criar Tarefa
        </button>
      </form>
      <Task
        todos={todos}
        deleteTask={deleteTask}
      />
    </div>
  );
} 

export default ToDo;