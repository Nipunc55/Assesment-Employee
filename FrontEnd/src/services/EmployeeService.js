import axios from "axios";

const API_BASE_URL = "http://localhost:3000"; 

const EmployeeService = {
  getAllEmployees: async () => {
    return await axios.get(`${API_BASE_URL}/employee`);
  },
  getEmployeeById: async (empId) => {
    return await axios.get(`${API_BASE_URL}/employee/${empId}`);
  },
  addEmployee: async (employeeData) => {
    
    return await axios.post(`${API_BASE_URL}/employee`, employeeData);     
  
  },
  updateEmployee: async (empId, employeeData) => {
    return await axios.put(`${API_BASE_URL}/employee/${empId}`, employeeData);
  },
  deleteEmployee: async (empId) => {
    return await axios.delete(`${API_BASE_URL}/employee/${empId}`);
  },
};

export default EmployeeService;
