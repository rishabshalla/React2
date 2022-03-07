import React, { Component } from "react";
import "./Style.css";

export class Form extends Component {
  state = {
    name: "",
    department: "",
    rating: "",
    employees: [],
    show: false,
  };

  handleChange = (e) => {
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  OnSubmit(e) {
    e.preventDefault();
    const Obj = {
      name: this.state.name,
      department: this.state.department,
      rating: this.state.rating,
    };

    this.state.employees.push(Obj);
    this.setState({
      name: "",
      department: "",
      rating: "",
      show: true,
    });
    console.log(this.state.employees);
  }

  render() {
    return (
      <>
        <div className="form-container">
          <h1>EMPLOYEE FEEDBACK FORM</h1>
          <form action="">
            <label for="name">Name : </label>
            <input
              required
              type="text"
              id="name"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
            <br></br>
            <label for="department">Department : </label>
            <input
              required
              type="text"
              id="department"
              value={this.state.department}
              name="department"
              onChange={this.handleChange}
            />
            <br></br>
            <label for="rating">Rating : </label>
            <input
              required
              type="number"
              id="rating"
              value={this.state.rating}
              name="rating"
              onChange={this.handleChange}
            />
            <br></br>
          </form>
          <button type="submit" onClick={this.OnSubmit.bind(this)}>
            Submit
          </button>
        </div>
        {this.state.show && (
          <div className="EmploData">
            {this.state.employees.length > 0 &&
              this.state.employees.map((event) => {
                return (
                  <div className="data">
                    <h1>
                      {event.name} | {event.department} | {event.rating}
                    </h1>
                  </div>
                );
              })}
          </div>
        )}
      </>
    );
  }
}
