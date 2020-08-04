import React, { Component } from "react";

class Home extends Component {
  state = {
    search: "",
    sortAsc: true,
    employees: [
      {
        image: "1",
        name: "Tiger Nixon",
        phone: "706",
        email: "@outlook",
        DOB: "xx/xx/xxxx",
      },
      {
        image: "2",
        name: "Barrett Winters",
        phone: "404",
        email: "@gmail",
        DOB: "xx/xx/xxxx",
      },
      {
        image: "3",
        name: "Zarrett Winters",
        phone: "404",
        email: "@gmail",
        DOB: "xx/xx/xxxx",
      },
      {
        image: "3",
        name: "Warrett Winters",
        phone: "404",
        email: "@gmail",
        DOB: "xx/xx/xxxx",
      },
    ],
  };

  componentDidMount() {
    // this.sortEmployees();
  }

  sortEmployees = () => {
    function compareAsc(a, b) {
      if (a.name > b.name) return 1;
      if (b.name > a.name) return -1;

      return 0;
    }
    function compareDesc(a, b) {
      if (a.name > b.name) return -1;
      if (b.name > a.name) return 1;

      return 0;
    }
    if (this.state.sortAsc) {
      const sortedEmployees = this.state.employees.sort(compareAsc);
      // console.log(sortedEmployees);
      this.setState({
        employees: sortedEmployees,
        sortAsc: false,
      });
    } else {
      const sortedEmployees = this.state.employees.sort(compareDesc);
      // console.log(sortedEmployees);
      this.setState({
        employees: sortedEmployees,
        sortAsc: true,
      });
    }
  };

  handleSubmit = (event) =>{
    event.preventDefault();
    this.filterEmployees();
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  filterEmployees = () => {
    const searchTerm = this.state.search.toLowerCase();
    this.setState ({
      employees: this.state.employees.filter((employee)=>
    employee.name.toLowerCase().includes(searchTerm)
      ),
    });
  }

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
                {this.state.employees.map((employee) => (
                  <tr>
                    <th scope="row">{employee.images}</th>
                    <td>{employee.name}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.email}</td>
                    <td>{employee.DOB}</td>
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
