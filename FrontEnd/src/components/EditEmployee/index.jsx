import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";
import { useNavigate } from "react-router-dom";

import EmployeeForm from "../EmployeeForm";
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
      <EmployeeForm
        employee={employee}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default EditEmployee;
