import React, { Component } from "react";
import SearchBar from "../SearchBar";
import API from "../../utils/API";

class EmployeesContainer extends Component {
  state = {
    search: "",
    employees: [],
    filteredEmployees: [],
    direction: {
      name: "asc",
      phone: "acs",
      email: "asc",
      dob: "asc",
    },
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

  //   sortEmployees = (field, property, backup) => {
  //     let sortEmployees = [...this.state.employees].sort((a, b) => {
  //       let x = a[field][property].toLowerCase();
  //       let y = b[field][property].toLowerCase();

  //       if (backup && x === y) {
  //         x = a[field][backup].toLowerCase();
  //         y = b[field][backup].toLowerCase();
  //         return x.localeCompare(y);
  //       }

  //       return x.localeCompare(y);
  //     });

  //     if (this.state.sortedEmployees !== sortEmployees) {
  //       sortEmployees = this.state.sortedEmployees.sort(() => -1);
  //     }

  //     this.setState({
  //       sortedEmployees: sortEmployees,
  //     });
  //   };

  // Sort with the key of specified object, primary: first sortable property, secondary: optional second sort i.e. sort by last name, then first.
  sortBy = (key, primary, secondary) => {
    const sortedEmployees = this.state.filteredEmployees.sort((a, b) => {
      a = a[key]
      b = b[key]

      // If secondary comparison given and primary comparison is equal
      if (secondary && a[primary] === b[primary]) {
        return a[secondary].localeCompare(secondary);
      }

      return a[primary].localeCompare(b[primary]);
    });

    console.log(sortedEmployees);

    this.setState({
      filteredEmployees: sortedEmployees,
    });
  };

  filterEmployees = (input) => {
    if (input) {
      this.setState({
        filteredEmployees: this.state.employees.filter((employee) => {
          return (
            employee.name.first.toLowerCase().includes(input) ||
            employee.name.last.toLowerCase().includes(input)
          );
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
          <table className="table table-striped table-sortable text-center mt-5">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col" data-field="name" data-sortable="true">
                  <span onClick={() => this.sortBy("name", "last", "first")}>Name</span>
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

export default EmployeesContainer;
