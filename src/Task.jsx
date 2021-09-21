import React from 'react';
import './ToDo.css';

function Task(props) {  
  const { deleteTask } = props;

  return (
    <div className="flex m-8">
      {props.todos.map((todo) => (
        <div
          className="container m-2 w-40 h-40 bg-yellow-400 border-2 relative"
          key={todo.key}
        >
          <div className="container w-38 h-8 bg-yellow-500 relative">
            <svg
              onClick={() => (deleteTask(todo.key))}
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 absolute top-1 right-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h3 className="ml-2">
            {todo.text}
          </h3>
            <div className="w-11 overflow-hidden inline-block absolute bottom-0 right-0 ">
              <div className=" h-24 bg-black rotate-45 transform origin-bottom-left bg-yellow-500"></div>
            </div>
        </div>
      ))}
    </div>
  );
} 

export default Task;
