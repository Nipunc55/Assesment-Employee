import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<EmployeeList />} />
          <Route path="/employee/add" element={<AddEmployee />} />
          <Route path="/employee/edit/:empId" element={<EditEmployee />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
