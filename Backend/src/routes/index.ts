import express, { Request, Response } from "express";
import {
  getEmployeeList,
  addEmployee,
  deleteEmployee,
  updateEmployee,
} from "../controllers/index";
const router = express.Router();

const ROUTES = {
  GET_EMPLOYEE: "/employee",
  ADD_EMPLOYEE: "/employee",
  UPDATE_EMPLOYEE: "/employee/:empId",
  DELETE_EMPLOYEE: "/employee/:empId",
};

router.get(ROUTES.GET_EMPLOYEE, getEmployeeList);
router.post(ROUTES.ADD_EMPLOYEE, addEmployee);
router.put(ROUTES.UPDATE_EMPLOYEE, updateEmployee);
router.delete(ROUTES.DELETE_EMPLOYEE, deleteEmployee);

export default router;
