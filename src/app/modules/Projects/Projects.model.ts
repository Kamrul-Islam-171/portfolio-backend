import { Schema, model } from 'mongoose';
import { TProject } from './Projects.interface';
const projectSchema = new Schema<TProject>(
  {
    title: {
      type: String,
      required: true,
      index:true, 
    },
    details: {
      type: String,
      required: true,
    },
    keyFeatures: {
      type: [String],
      required: true,
    },
    techStack: {
      type: [String],
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    liveLink: {
      type: String,
      required: true,
    },
    clientLink: {
      type: String,
      required: true,
    },
    serverLink: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Project = model<TProject>('Project', projectSchema);