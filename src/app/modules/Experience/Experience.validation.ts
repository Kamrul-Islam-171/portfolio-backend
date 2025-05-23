import { z } from 'zod';

const experienceZodSchema = z.object({
  body: z.object({
    companyName: z.string().min(1, { message: 'Company name is required' }),
    position: z.string().min(1, { message: 'Position is required' }),
    location: z.string().min(1, { message: 'Location is required' }),
    jobType: z.enum(['Remote', 'On-site'], {
      required_error: 'Job type is required',
      invalid_type_error: 'Job type must be either "Remote" or "On-site"',
    }),
    jobDescription: z
      .string()
      .min(1, { message: 'Job description is required' }),
  }),
});
const updateZodSchema = z.object({
  body: z.object({
    companyName: z.string().min(1, { message: 'Company name is required' }).optional(),
    position: z.string().min(1, { message: 'Position is required' }).optional(),
    location: z.string().min(1, { message: 'Location is required' }).optional(),
    jobType: z.enum(['Remote', 'On-site'], {
      required_error: 'Job type is required',
      invalid_type_error: 'Job type must be either "Remote" or "On-site"',
    }).optional(),
    jobDescription: z
      .string()
      .min(1, { message: 'Job description is required' }).optional(),
  })
});

export const experienceValidation = {
  experienceZodSchema,
  updateZodSchema
};
