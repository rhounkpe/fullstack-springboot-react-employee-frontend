import React, {useEffect, useState} from "react";
import EmployeeService from "../../services/EmployeeService";
import {Link} from "react-router-dom";

const EmployeeListComponent = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getAllEmployees();
    }, []);

    const getAllEmployees = () => {
        EmployeeService.getEmployees().then((res) => {
            setEmployees(res.data);
        }).catch(err => {
            console.error(err);
        });
    };

    const deleteEmployee = (employeeId) => {
        EmployeeService.deleteEmployee(employeeId).then((res) => {
            getAllEmployees();
        }).catch(err => {
            console.error(err);
        });
    }

    return (
        <div className="container">
            <h2 className="text-center">Employees List</h2>

            <div className="row">
                <Link to="/add-employee" className="btn btn-primary">Add Employee</Link>
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
                        employees.map(
                            employee =>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <Link className="btn btn-info" to={`/edit-employee/${employee.id}`} >Update</Link>

                                        <button className="btn btn-danger" onClick={() => deleteEmployee(employee.id)}
                                                style={{ marginLeft: "10px"}}
                                        >
                                            Delete
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
};

export default EmployeeListComponent;
