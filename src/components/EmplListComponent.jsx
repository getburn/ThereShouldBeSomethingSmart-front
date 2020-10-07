import React, { Component } from "react";
import EmployeeService from "../service/EmployeeService";

class EmplListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    EmployeeService.getAllEmp().then((response) => {
      this.setState({ employees: response.data });
    });
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Employees list </h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Employee First Name</th>
                <th>Employee Sec Name</th>
                <th>Employee Department's ID</th>
                <th>Employee Salary</th>
                <th>Employee Salary Amount</th>
              </tr>
            </thead>

            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.empId}>
                  <td> {employee.empId}</td>
                  <td> {employee.empName}</td>
                  <td> {employee.empSecName}</td>
                  <td> {employee.empDepId}</td>
                  <td> {employee.empSalary}</td>
                  <td> {employee.empSalaryAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default EmplListComponent;
