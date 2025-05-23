import { Schema, model } from 'mongoose';
import { TEducation } from './education.interface';

const educationSchema = new Schema<TEducation>(
  {
    degree: {
      type: String,
      required: true,
      unique: true
    },
    university: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    passingYear: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Education = model('Education', educationSchema);
