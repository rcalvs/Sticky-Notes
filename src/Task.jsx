import React from 'react';
import './ToDo.css';

function Task(props) {  
  const { deleteTask, completeTask } = props;
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
    <div>
      {props.todos.map((todo) => (
        <div key={todo.key} >
        <h3>
          {todo.text}
        </h3>
          <button onClick={() => (deleteTask(todo.key))} >Deletar</button>
          {/* <button onClick={() => (submitUpdate(todo.key))} >Editar</button> */}

        </div>
      ))}
    </div>
  );
} 

export default Task;
