import mongoose, { Schema, Document } from "mongoose";

interface Employee extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: "male" | "female";
}

const employeeSchema = new Schema<Employee>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  gender: { type: String, enum: ["male", "female"], required: true },
});

const EmployeeModel = mongoose.model<Employee>("Employee", employeeSchema);

export default EmployeeModel;
