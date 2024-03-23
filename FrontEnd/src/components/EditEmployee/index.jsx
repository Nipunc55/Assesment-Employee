import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import "./style.css";
function EditEmployee() {
  const { empId } = useParams();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
  });
  const location = useLocation();

  const navigateTo = useNavigate();
  const { employeeData } = location.state;

  useEffect(() => {
    setEmployee(employeeData);
  }, [employeeData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await EmployeeService.updateEmployee(empId, employee);
      navigateTo("/");
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Edit Employee</h2>
      <form className="form-group" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={employee.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={employee.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="phoneNumber"
          value={employee.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <select name="gender" value={employee.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditEmployee;
