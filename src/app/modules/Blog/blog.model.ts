

import { model, Schema } from 'mongoose';
import { TBlog } from './blog.interface';


const blogSchema = new Schema<TBlog>(
  {
    title: { type: String, required: true },
    details: { type: String, required: true },
    coverImage: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Blog = model<TBlog>('Blog', blogSchema)
