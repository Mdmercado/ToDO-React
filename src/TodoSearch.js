import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  const OnsearchValueChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  return [
    <input
      className="TodoSearch"
      placeholder="Manzana"
      value={searchValue}
      onChange={OnsearchValueChange}
    />,
  ];
}

export { TodoSearch };
