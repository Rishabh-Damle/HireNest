import express from "express";
import cors from "cors";
const app = express();
import { adminRouter } from "./routes/admin.js";
import { employeeRouter } from "./routes/employee.js";
import { employerRouter } from "./routes/employer.js";
import { PORT } from "./config.js";
app.use(cors());
app.use(express.json());
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/employee", employeeRouter);
app.use("/api/v1/employer", employerRouter);
app.listen(PORT, () => {
  console.log("Server is started on port 3000");
});
