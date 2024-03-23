import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";
import EmployeeForm from "../EmployeeForm";

function AddEmployee() {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
  });
  const navigateTo = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
    console.log(employee);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const response= await EmployeeService.addEmployee(employee);
     
      navigateTo("/");
    } catch (error) {
       alert(error.message)
    }
   
  };

  return (
    <div className="form-container">
      <h2>Add Employee</h2>
      <EmployeeForm
        employee={employee}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

    </div>
  );
}

export default AddEmployee;
