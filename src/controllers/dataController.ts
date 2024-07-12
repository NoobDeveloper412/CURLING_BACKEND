import { Request, Response } from "express";
import Match from "../models/MatchSchema";

export const uploadData = async (
  req: Request,
  res: Response
): Promise<void> => {
  const data = req.body;

  try {
    if (Array.isArray(data)) {
      await Match.insertMany(data);
    } else {
      await Match.create(data);
    }
    res.status(201).json({ message: "Data uploaded successfully" });
  } catch (error) {
    res.status(500).json({ message: "Data upload failed", error });
  }
};
