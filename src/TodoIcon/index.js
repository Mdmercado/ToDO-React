import React from "react";
import { ReactComponent as CheckSVG } from "./check.svg";
import { ReactComponent as DeleteSVG } from "./delete.svg";
import "./TodoIcon.css";

// creo un objeto de tipos de iconos
const iconTypes = {
  check: (color) => (
    <CheckSVG className="Icon-svg Icon-svg--check" fill={color}></CheckSVG>
  ),
  delete: (color) => (
    <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color}></DeleteSVG>
  ),
};

function TodoIcon({ type, color = "gray", onClick }) {
  return (
    // iconos con estado
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
