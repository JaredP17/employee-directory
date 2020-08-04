import React, { Component } from "react";
import SearchBar from "../SearchBar";
import API from "../../utils/API";

class Employees extends Component {
  state = {
    search: "",
    employees: [],
    filteredEmployees: [],
    sortAscending: true,
  };

  // When this component mounts, load random users as employees from https://randomuser.me/
  componentDidMount() {
    API.getEmployees()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          filteredEmployees: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  // Update search state to filter by employee name
  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ search: value });
    this.filterEmployees(value.toLowerCase().trim());
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  sortEmployees = (field, property) => {};

  filterEmployees = (input) => {
    if (input) {
      this.setState({
        filteredEmployees: this.state.employees.filter((employee) => {
          return employee.name.first.toLowerCase().includes(input) || employee.name.last.toLowerCase().includes(input);
        }),
      });
    } else {
      this.setState({ filteredEmployees: this.state.employees });
    }
  };

  render() {
    return (
      <>
        <SearchBar
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <div className="container">
          <table className="table table-striped text-center mt-5">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">
                  <span onClick={() => console.log("Sort by name")}>Name</span>
                </th>
                <th scope="col">
                  <span onClick={() => console.log("Sort by phone number")}>
                    Phone
                  </span>
                </th>
                <th scope="col">
                  <span onClick={() => console.log("Sort by email")}>
                    Email
                  </span>
                </th>
                <th scope="col">
                  <span onClick={() => console.log("Sort by dob")}>DOB</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.filteredEmployees.map((employee) => {
                const { first, last } = employee.name;
                const fullName = `${first} ${last}`;

                // Format date
                const date = new Date(employee.dob.date);
                let dob = [];
                dob.push(("0" + (date.getMonth() + 1)).slice(-2));
                dob.push(("0" + date.getDate()).slice(-2));
                dob.push(date.getFullYear());

                // Join formatted date
                dob = dob.join("-");

                return (
                  <tr key={employee.login.uuid}>
                    <th scope="row">
                      <img src={employee.picture.thumbnail} alt={fullName} />
                    </th>
                    <td>{fullName}</td>
                    <td>{employee.cell}</td>
                    <td>
                      <a href={`mailto:${employee.email}`}>{employee.email}</a>
                    </td>
                    <td>{dob}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Employees;
