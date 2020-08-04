import React from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <div className="container">
        <table class="table table-striped text-center mt-5">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <img src="https://www.fillmurray.com/50/50" alt=""/>
              </th>
              <td>Fill Murray</td>
              <td>(123)-456-7890</td>
              <td>fill.murray@example.com</td>
              <td>09-21-1950</td>
            </tr>
            <tr>
              <th scope="row">
                <img src="https://www.fillmurray.com/50/50" alt=""/>
              </th>
              <td>Fill Murray</td>
              <td>(123)-456-7890</td>
              <td>fill.murray@example.com</td>
              <td>09-21-1950</td>
            </tr>
            <tr>
              <th scope="row">
                <img src="https://www.fillmurray.com/50/50" alt=""/>
              </th>
              <td>Fill Murray</td>
              <td>(123)-456-7890</td>
              <td>fill.murray@example.com</td>
              <td>09-21-1950</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
