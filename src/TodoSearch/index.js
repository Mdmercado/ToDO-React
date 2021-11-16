import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  const OnsearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  return [
    <input
      className="TodoSearch"
      placeholder="Buscar: Ir al Gimnasio"
      value={searchValue}
      onChange={OnsearchValueChange}
    />,
  ];
}

export { TodoSearch };
