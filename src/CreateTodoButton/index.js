import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const ClickButton = (msg) => {
    alert(msg);
  };
  return (
    // react interpreta las llaves vacias como un Fragment
    <>
      <button
        className="CreateTodoButton"
        type="submit"
        onClick={() => ClickButton("Se abre modal")}
      >
        +
      </button>
    </>
  );
}

export { CreateTodoButton };
