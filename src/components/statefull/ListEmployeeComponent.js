import React, { Component } from "react";
import EmployeeService from "../../services/EmployeeService";

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: []
        };

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployees().then(
            (res) => {
                this.setState({
                    employees: res.data
                });
            }
        );
    }

    addEmployee() {
        this.props.history.push("/add-employee/-1");
    }

    editEmployee(id) {
        this.props.history.push(`/add-employee/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Email</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.id}</td>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.email}</td>
                                            <td>
                                                <button onClick={() => this.editEmployee(employee.id)}
                                                        className="btn btn-info"
                                                >
                                                    Update
                                                </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;
