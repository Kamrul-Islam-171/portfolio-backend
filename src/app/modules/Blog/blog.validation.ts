import { z } from 'zod';

const blogSchema = z.object({
  body: z.object({
    title: z.string().min(1, 'Title is required'),
    details: z.string().min(1, 'Details are required'),
    coverImage: z.string({
        required_error:'url is required'
    }),
  }),
});
const UpdateblogSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    details: z.string().optional(),
    coverImage: z.string().optional(),
  }),
});

export const blogValidation = {
  blogSchema,
  UpdateblogSchema
};
