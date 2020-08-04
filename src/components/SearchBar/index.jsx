import React from "react";
import "./style.css";

const SearchBar = (props) => {
  // Setting the component's initial state

  return (
    <nav className="navbar navbar-light bg-light justify-content-center">
      <form className="form-inline m-2">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          className="form-control"
          name="search"
          type="search"
          placeholder="Search"
          id="search"
        />
      </form>
    </nav>
  );
};

export default SearchBar;
