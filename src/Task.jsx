import React from 'react';
import './ToDo.css';

function Task(props) {  
  const { deleteTask } = props;
  // const [edit, setEdit] = useState({
  //   id: null,
  //   value: ''
  // });

  // const submitUpdate = (value) => {
  //   props.editTask(edit.id, value);
  //   setEdit({
  //     id: null,
  //     value: ''
  //   });
  // };

  if (props.todos.length === 0) {
    return (
      <p>Adicione alguma tarefa!</p>
    )
  }

  return (
    <div className="flex m-8">
      {props.todos.map((todo) => (
        <div
          className="container m-2 w-40 h-40 bg-yellow-400 border-2"
          key={todo.key}
        >
          <div className="container w-38 h-8 bg-yellow-500">
            <button onClick={() => (deleteTask(todo.key))} >X</button>
          </div>
          <h3>
            {todo.text}
          </h3>
            {/* <button onClick={() => (submitUpdate(todo.key))} >Editar</button> */}

            {/* <div className="w-11 overflow-hidden inline-block bottom-0 right-0">
              <div className=" h-24 bg-black rotate-45 transform origin-bottom-left"></div>
            </div> */}
        </div>
      ))}
    </div>
  );
} 

export default Task;
