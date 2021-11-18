import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = () => {
    if (!props.openModal === true) {
      props.setOpenModal(true);
    } else {
      props.setOpenModal(false);
    }
    // Otra forma
    // props.setOpenModal((prevState) => !prevState);
  };
  return (
    // react interpreta las llaves vacias como un Fragment
    <>
      <button
        className="CreateTodoButton"
        type="submit"
        onClick={onClickButton}
      >
        +
      </button>
    </>
  );
}

export { CreateTodoButton };
