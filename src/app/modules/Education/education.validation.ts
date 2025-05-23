import { z } from 'zod';

const educationZodSchema = z.object({
  body: z.object({
    degree: z.string().min(1, { message: 'Degree is required' }),
    university: z.string().min(1, { message: 'University is required' }),
    location: z.string().min(1, { message: 'Location is required' }),
    passingYear: z.string().min(1, { message: 'Passing year is required' }),
  }),
});

const educationUpdateZodSchema = z.object({
  body: z.object({
    degree: z.string().optional(),
    university: z.string().optional(),
    location: z.string().optional(),
    passingYear: z.string().optional(),
  }),
});

export const educationValidation = {
  educationZodSchema,
  educationUpdateZodSchema
};
