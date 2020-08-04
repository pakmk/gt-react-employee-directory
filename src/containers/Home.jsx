import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    search: "",
    sortAsc: true,
    employees: [],
    filteredEmployees: [],
  };

  componentDidMount() {
    // this.sortEmployees();
    axios.get("https://randomuser.me/api/?results=30").then((response) => {
      console.log(response);
      this.setState({
        employees: response.data.results,
        filteredEmployees: response.data.results,
      });
    });
  }

  sortEmployees = () => {
    function compareAsc(a, b) {
      if (a.name.first > b.name.first) return 1;
      if (b.name.first > a.name.first) return -1;

      return 0;
    }
    function compareDesc(a, b) {
      if (a.name.first > b.name.first) return -1;
      if (b.name.first > a.name.first) return 1;

      return 0;
    }
    if (this.state.sortAsc) {
      const sortedEmployees = this.state.filteredEmployees.sort(compareAsc);
      // console.log(sortedEmployees);
      this.setState({
        filteredEmployees: sortedEmployees,
        sortAsc: false,
      });
    } else {
      const sortedEmployees = this.state.filteredEmployees.sort(compareDesc);
      // console.log(sortedEmployees);
      this.setState({
        filteredEmployees: sortedEmployees,
        sortAsc: true,
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.filterEmployees();
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  filterEmployees = () => {
    const searchTerm = this.state.search.toLowerCase();
    this.setState({
      filteredEmployees: this.state.employees.filter((employee) =>
        employee.name.first.toLowerCase().includes(searchTerm)
      ),
    });
  };

  render() {
    return (
      <div className="container">
        <div className="col-sm-8">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                name="search"
                value={this.state.search}
                onChange={this.handleInputChange}
              />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col" onClick={this.sortEmployees}>
                    Name
                  </th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">DOB</th>
                </tr>
              </thead>
              <tbody>
                {this.state.filteredEmployees.map((employee) => (
                  <tr>
                    <th scope="row">{employee.picture.thumbnail}</th>
                    <td>{employee.name.first}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.email}</td>
                    <td>{employee.dob.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
