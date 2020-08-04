import React, { Component } from "react";

class Home extends Component {
  state = {
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
        name: "Garrett Winters",
        phone: "404",
        email: "@gmail",
        DOB: "xx/xx/xxxx",
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-striped">
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
                  <th scope="row">{this.state.employees[0].images}</th>
                  <td>{this.state.employees[0].name}</td>
                  <td>{this.state.employees[0].phone}</td>
                  <td>{this.state.employees[0].email}</td>
                  <td>{this.state.employees[0].DOB}</td>
                </tr>
                <tr>
                <th scope="row">{this.state.employees[1].images}</th>
                  <td>{this.state.employees[1].name}</td>
                  <td>{this.state.employees[1].phone}</td>
                  <td>{this.state.employees[1].email}</td>
                  <td>{this.state.employees[1].DOB}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
