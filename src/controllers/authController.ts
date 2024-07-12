import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt";

export const login = async (req: Request, res: Response): Promise<void> => {
  console.log("Hello from login endpoint");

  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: "Username and password are required" });
    return;
  }

  // Fetch user from DB, this is a mock for demonstration
  // Replace this with actual database call in real application
  const user = {
    id: 1,
    username: "Dev Tester",
    password: "$2a$10$598qKIT0fT.V26DkLGzS1.RloYROAeP34ncxKcfj8LiDVP8ds5aCC",
  }; // example hashed password

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(401).json({ message: "Invalid credentials, not a match!" });
    return;
  }

  const token = generateToken({ id: user.id });
  res.json({ token });
};
