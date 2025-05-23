import AppError from "../../errors/AppError";
import { TExperience } from "./Experience.interface";
import { Experience } from "./Experience.model";
import  httpStatus  from 'http-status';


const addexperience = async(payload: TExperience) =>{
    return await Experience.create(payload);
}

const getAllexperience = async() => {
    return await Experience.find();
}
const updateExperience = async(id:string, payload: Partial<TExperience>) => {
    const isExist = await Experience.findById(id);
    if(!isExist) {
        throw new AppError(httpStatus.NOT_FOUND, "Experience not found!");
    }
    return await Experience.findByIdAndUpdate(id, payload, {new: true});
    
}

export const experienceService = {
    addexperience,
    getAllexperience,
    updateExperience
}