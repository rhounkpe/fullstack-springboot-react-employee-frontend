import React from "react";
import EmployeeService from "../../services/EmployeeService";

class UpdateEmployeeComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            email: ''
        };

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({
                firstName: employee.firstName,
                lastName: employee.lastName,
                email: employee.email
            })
        });
    }

    changeFirstNameHandler(event) {
        this.setState({ firstName: event.target.value});
    }

    changeLastNameHandler(event) {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler(event) {
        this.setState({email: event.target.value});
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        };

        console.log('employee => ', JSON.stringify(employee));

        EmployeeService.updateEmployee(employee, this.state.id).then(res => {
            this.props.history.push('/employees');
        });
    }

    cancel = (e) => {

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2 className="text-center">Update Employee</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First name</label>
                                    <input
                                        placeholder="First name"
                                        name="firstName"
                                        className="form-control"
                                        value={this.state.firstName}
                                        onChange={this.changeFirstNameHandler}
                                    />
                                </div>
                                <br/>
                                <div className="form-group">
                                    <label>First name</label>
                                    <input
                                        placeholder="Last name"
                                        name="lastName"
                                        className="form-control"
                                        value={this.state.lastName}
                                        onChange={this.changeLastNameHandler}
                                    />
                                </div>
                                <br/>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        placeholder="email"
                                        name="email"
                                        className="form-control"
                                        value={this.state.email}
                                        onChange={this.changeEmailHandler}
                                    />
                                </div>
                                <br/>
                                <div>
                                    <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateEmployeeComponent;
