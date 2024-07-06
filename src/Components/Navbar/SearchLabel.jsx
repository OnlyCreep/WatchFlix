import React from "react";
import { IoIosSearch } from "react-icons/io";

export default function SearchLabel(props) {
const {setSearch} = props.value

  return (
    <label
      htmlFor="nameSearch"
      className="search"
      onClick={() => {
        setSearch(true);
      }}
    >
      <IoIosSearch />
    </label>
  );
}
