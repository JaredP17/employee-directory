import React, { Component } from "react";
import "./style.css"

class SearchBar extends Component {
  // Setting the component's initial state
  state = {
    search: "",
  };

  render() {
    return (
      <nav className="navbar navbar-light bg-light justify-content-center">
        <form className="form-inline m-2">
          <input
            className="form-control"
            name="search"
            type="search"
            placeholder="Search"
            id="search"
          />
        </form>
      </nav>
    );
  }
}

export default SearchBar;
