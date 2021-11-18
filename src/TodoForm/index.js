import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>¡Añade una nueva Tarea!</label>
      <textarea
        onChange={onChange}
        placeholder="Programar en react.."
      ></textarea>
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button-cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button-add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
