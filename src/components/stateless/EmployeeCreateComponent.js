import React, {useEffect, useState} from "react";
import EmployeeService from "../../services/EmployeeService";
import {Link, useNavigate, useParams} from "react-router-dom";
const EmployeeCreateComponent = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const { id } = useParams();

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    const employee = {
      firstName,
      lastName,
      email
    };

    if (id) {
      EmployeeService.updateEmployee(id, employee)
          .then((res) => {
            navigate('/employees');
          })
          .catch(err => {
            console.error(err);
          });

    } else {
      EmployeeService.createEmployee(employee).then(res => {
        navigate('/employees');
      }).catch(e => {
        console.log(e);
      });
    }

  };

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((res) => {
      const employee = res.data;
      setFirstName(employee.firstName);
        setLastName(employee.lastName);
        setEmail(employee.email);
    }).catch(e => {
      console.error(e);
    });
  }, []);

  const getTitle = () => {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>
    } else {
      return <h2 className="text-center">Add Employee</h2>
    }
  };

  return (

      <div className="container">
        <br/><br/>
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            { getTitle() }
            <h2 className="text-center">Add Employee</h2>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>First name</label>
                  <input
                      placeholder="First name"
                      name="firstName"
                      className="form-control"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <br/>
                <div className="form-group">
                  <label>First name</label>
                  <input
                      placeholder="Last name"
                      name="lastName"
                      className="form-control"

                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <br/>
                <div className="form-group">
                  <label>Email</label>
                  <input
                      placeholder="Enter Email"
                      name="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <br/>
                <div>
                  <button className="btn btn-success" onClick={(e) => saveOrUpdateEmployee(e)}>Save</button>
                  <Link to="/employees" className="btn btn-danger" style={{marginLeft: "10px"}}>Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default EmployeeCreateComponent;
