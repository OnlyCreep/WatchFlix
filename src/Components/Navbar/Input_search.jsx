import React from "react";

export default function Input_search(props) {
    const {setValue} = props.value
    
  return (
    <>
      {" "}
      <input
        type="text"
        className="searchInput"
        placeholder="Название сериала или фильма"
        id="nameSearch"
        autoComplete="off"
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}
