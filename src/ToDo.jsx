import React, { useState } from 'react';
import './ToDo.css';
// import '../../App.css';
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

// const completeTask = (key) => {
//   // Mudar CSS
// }

const deleteTask = (key) => {
  const remove = [...todos].filter(task => task.key !== key)
  setTodos(remove)
}

// const editTask = (key, value) => {
//   const prevTodos = [todos];
//   prevTodos.map((each) => {
//     if (each.key === key) {
//       each.text = value;
//     }
//   });
//   setTodos(prev => prev.map(item => (item.key === key ? value : item)));
// }

  return (
    <div className="flex-col">
      <h1 className="flex p-8 justify-center text-2xl">
        Minha Lista de Tarefas
      </h1>
      <form
        className="flex m-auto justify-center"
        onSubmit={submitTask}>
        <input
          className="border-4 border-black rounded-tl-xl"
          type="text"
          onChange={addTask}
        />
        <button
          className="border-4 border-black rounded-br-xl"
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