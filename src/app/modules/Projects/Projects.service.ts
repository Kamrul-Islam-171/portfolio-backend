import AppError from "../../errors/AppError";

import  httpStatus  from 'http-status';
import { TProject } from "./Projects.interface";
import { Project } from "./Projects.model";


const add = async(payload: TProject) =>{
    return await Project.create(payload);
}

const getAll = async() => {
    return await Project.find();
}
const update = async(id:string, payload: Partial<TProject>) => {
    const isExist = await Project.findById(id);
    if(!isExist) {
        throw new AppError(httpStatus.NOT_FOUND, "Project not found!");
    }
    
    return await Project.findByIdAndUpdate(id, payload, {new: true});
    
}
const deleteFromDB = async(id:string) => {
    const isExist = await Project.findById(id);
    if(!isExist) {
        throw new AppError(httpStatus.NOT_FOUND, "Project not found!");
    }
    return await Project.findByIdAndDelete(id);
}

const getAProject = async(id:string) => {
    const isExist = await Project.findById(id);
    if(!isExist) {
        throw new AppError(httpStatus.NOT_FOUND, "Project not found!");
    }
    return await Project.findById(id);
}

export const ProjectService = {
    add,
    getAll,
    update,
    deleteFromDB,
    getAProject
}