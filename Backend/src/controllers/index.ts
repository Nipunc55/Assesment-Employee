import { Request, Response } from "express";
import EmployeeModel from "../models/employee";

export const addEmployee = async (req: Request, res: Response) => {
  try {
    console.log(req.body);

    const { firstName, lastName, email, phoneNumber, gender } = req.body;

    const newEmployee = new EmployeeModel({
      firstName,
      lastName,
      email,
      phoneNumber,
      gender,
    });

    // Save the employee
    await newEmployee.save();

    res
      .status(201)
      .json({ message: "Employee added successfully", employee: newEmployee });
  } catch (error) {
    console.error("Error adding employee:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getEmployeeList = async (req: Request, res: Response) => {
  try {
    //get all employees
    const employees = await EmployeeModel.find();

    res.status(200).json(employees);
  } catch (error) {
    console.error("Error fetching employee list:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const employeeId = req.params.empId;

    // Find the employeee delete it
    const deletedEmployee = await EmployeeModel.findByIdAndDelete(employeeId);

    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({
      message: "Employee deleted successfully",
      employee: deletedEmployee,
    });
  } catch (error) {
    console.error("Error deleting employee:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const employeeId = req.params.empId;
    console.log(employeeId);

    const { firstName, lastName, email, phoneNumber, gender } = req.body;

    // Find the employee and update values
    const updatedEmployee = await EmployeeModel.findByIdAndUpdate(
      employeeId,
      { firstName, lastName, email, phoneNumber, gender },
      { new: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({
      message: "Employee updated successfully",
      employee: updatedEmployee,
    });
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
