import { z } from 'zod';

 const projectZodSchema = z.object({
  body: z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    details: z.string().min(1, { message: 'Details are required' }),
    keyFeatures: z
      .array(z.string().min(1, { message: 'Each key feature must be a non-empty string' }))
      .min(1, { message: 'At least one key feature is required' }),
    techStack: z
      .array(z.string().min(1, { message: 'Each tech must be a non-empty string' }))
      .min(1, { message: 'At least one tech stack item is required' }),
    imageUrl: z.string().url({ message: 'Image URL must be valid' }),
    liveLink: z.string().url({ message: 'Live link must be a valid URL' }),
    clientLink: z.string().url({ message: 'Client link must be a valid URL' }),
    serverLink: z.string().url({ message: 'Server link must be a valid URL' }),
  }),
});

const updateProjectZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    details: z.string().optional(),
    imageUrl: z.string().url().optional(),
  }),
});

export const projectValidation = {
    projectZodSchema,
    updateProjectZodSchema
}

