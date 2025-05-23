import AppError from "../../errors/AppError";
import { TEducation } from "./education.interface"
import { Education } from "./education.model"

const addEducation = async(payload: TEducation) =>{
    return await Education.create(payload);
}

const getAllEducation = async() => {
    return await Education.find();
}

const update = async(id:string, payload: Partial<TEducation>) => {
    const isExist = await Education.findById(id);
    if(!isExist) {
        throw new AppError(httpStatus.NOT_FOUND, "Education not found!");
    }
    
    return await Education.findByIdAndUpdate(id, payload, {new: true});
    
}
const deleteFromDB = async(id:string) => {
    const isExist = await Education.findById(id);
    if(!isExist) {
        throw new AppError(httpStatus.NOT_FOUND, "Education not found!");
    }
    return await Education.findByIdAndDelete(id);
}

export const educaitonService = {
    addEducation,
    getAllEducation,
    update,
    deleteFromDB
}