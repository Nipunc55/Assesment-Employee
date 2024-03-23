import React, { useState } from 'react';
import './style.css'
const EmployeeForm = ({ employee, handleChange, handleSubmit }) => {
    const [submitAttempt,setSubmit]=useState(false)
    function submit(){
       
        setSubmit(true)

    }
  return (
    //added new class submited to ditect submit button click and error validations after that
    <form className={`form-group ${submitAttempt && "submited"}`} onSubmit={handleSubmit}>
     <div className="input-group">
        <input
          type="text"
          name="firstName"
          value={employee.firstName}
          onChange={handleChange}

          placeholder="First Name"
          pattern="[a-zA-Z]{6,10}"
          required
        />
       <div className="error-msg">First name must be 6 to 10 alphabetic characters</div>
      </div>
      <div className="input-group">
        <input
          type="text"
          name="lastName"
          value={employee.lastName}
          
          onChange={handleChange}
          placeholder="Last Name"
          pattern="[a-zA-Z]{6,10}"
          required
        />
      <div className="error-msg">Last name must be 6 to 10 alphabetic characters</div>
      </div>
      <div className="input-group">
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          placeholder="Email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          required
        />
      <div className="error-msg">Invalid email address</div>
      </div>
      <div className="input-group">
        <input
          type="tel"
          name="phoneNumber"
          value={employee.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          pattern="0\d{9}"
          required
        />
         <div className="error-msg">Invalid phone number</div>
      </div>
      <div className="input-group">
        <select name="gender" required onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
         <div className="error-msg">Please select a gender</div>
      </div>

      <button type="submit" onClick={submit}>Submit</button>
    </form>
  );
};

export default EmployeeForm;
