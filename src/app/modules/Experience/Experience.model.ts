import { model, Schema } from "mongoose";
import { TExperience } from "./Experience.interface";

const experienceSchema = new Schema<TExperience>(
  {
    companyName: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      enum: ['Remote', 'On-site'],
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Experience = model<TExperience>('Experience', experienceSchema);