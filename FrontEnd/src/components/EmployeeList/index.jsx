import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";
import { useNavigate } from "react-router-dom";
function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const response = await EmployeeService.getAllEmployees();
    setEmployees(response.data);
  };
  const deleteEmployee = async (empId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );
    if (confirmDelete) {
      await EmployeeService.deleteEmployee(empId);
      // Refresh employee list after deletion
      loadEmployees();
    }
  };

  return (
    <div className="table-container">
      <h2>Employee List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.gender}</td>
              <td>
                <Link
                  to={`/employee/edit/${employee._id}`}
                  state={{ employeeData: employee }}
                >
                  Edit
                </Link>{" "}
                |{" "}
                <button onClick={() => deleteEmployee(employee._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/employee/add">Add Employee</Link>
    </div>
  );
}

export default EmployeeList;
