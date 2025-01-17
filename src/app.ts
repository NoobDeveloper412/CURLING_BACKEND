import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes";
import dataRoutes from "./routes/dataRoutes";
import dotenv from "dotenv";
import connectDB from "./config/database";
dotenv.config();

(async () => {
  await connectDB();

  const app = express();

  app.use(bodyParser.json());
  app.use("/auth", authRoutes);
  app.use("/data", dataRoutes);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})();
