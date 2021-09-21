import React, { useState, useEffect } from 'react';
import './ToDo.css';
import Task from './Task';

function ToDo() {

const [task, setTask] = useState({});
const [todos, setTodos] = useState([]);

function addTask(event) {
  const currentTask = {
    text: event.target.value,
    key: Date.now()
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
      key: Date.now()
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
      <h1 className="flex p-8 justify-center text-2xl">
        Minha Lista de Tarefas
      </h1>
      <form
        className="flex m-auto justify-center"
        onSubmit={submitTask}>
        <input
          className="border-2 px-2 border-black rounded-tl-xl"
          type="text"
          maxLength="85"
          onChange={addTask}
        />
        <button
          className="border-2 px-2 border-black rounded-br-xl"
        >
          Criar Tarefa
        </button>
      </form>
      <Task
        todos={todos}
        // completeTask={completeTask}
        deleteTask={deleteTask}
        // editTask={editTask}
      />
    </div>
  );
} 

export default ToDo;