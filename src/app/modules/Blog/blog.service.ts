import AppError from "../../errors/AppError";

import  httpStatus  from 'http-status';
import { TBlog } from "./blog.interface";
import { Blog } from "./blog.model";



const add = async(payload: TBlog) =>{
    return await Blog.create(payload);
}

const getAll = async() => {
    return await Blog.find();
}
const update = async(id:string, payload: Partial<TBlog>) => {
    const isExist = await Blog.findById(id);
    if(!isExist) {
        throw new AppError(httpStatus.NOT_FOUND, "Blog is not found!");
    }
    
    return await Blog.findByIdAndUpdate(id, payload, {new: true});
    
}
const deleteFromDB = async(id:string) => {
    const isExist = await Blog.findById(id);
    if(!isExist) {
        throw new AppError(httpStatus.NOT_FOUND, "Blog is not found!");
    }
    return await Blog.findByIdAndDelete(id);
}
const findABlog = async(id:string) => {
    const isExist = await Blog.findById(id);
    if(!isExist) {
        throw new AppError(httpStatus.NOT_FOUND, "Blog is not found!");
    }
    return await Blog.findById(id);
}

export const BlogService = {
    add,
    getAll,
    update,
    deleteFromDB,
    findABlog
}