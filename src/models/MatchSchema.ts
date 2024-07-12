import { Schema, model } from "mongoose";

const matchSchema = new Schema(
  {
    match: { type: String, required: true },
    level: { type: String, required: true },
    team1: { type: String, required: true },
    team2: { type: String, required: true },
    end: { type: Number, required: true },
    rock: { type: Number, required: true },
  },
  { timestamps: true, strict: false }
);

const Match = model("Match", matchSchema);

export default Match;
