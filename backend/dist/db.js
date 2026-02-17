import dotenv from "dotenv";
dotenv.config();
import mongoose, { Types } from "mongoose";
import { DB_URL } from "./config.js";
console.log(DB_URL);
if (DB_URL) {
    mongoose
        .connect(DB_URL)
        .then(() => {
        console.log("DB is connected succsessfuly");
    })
        .catch((err) => {
        console.log("Mongo connection error ", err);
    });
}
else {
    console.error("DB_URL is not set; skipping Mongo connection");
}
import { model, Schema } from "mongoose";
const employeeSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true },
    phoneNumber: { type: String, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
export const employeeModel = model("Employee", employeeSchema);
const employerSchema = new Schema({
    companyName: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, unique: true },
    phoneNumber: { type: String, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
export const employerModel = model("Employer", employerSchema);
const adminSchema = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
});
export const adminModel = model("Admin", adminSchema);
const jobSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: String,
    salary: Number,
    industry: String,
    employerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employer",
        required: true,
    },
    createdAt: { type: Date, default: Date.now },
});
export const jobModel = model("Job", jobSchema);
const applicationSchema = new Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
    },
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        required: true,
    },
    status: {
        type: String,
        default: "applied",
    },
    appliedAt: {
        type: Date,
        default: Date.now,
    },
});
export const applicationModel = model("Application", applicationSchema);
//# sourceMappingURL=db.js.map