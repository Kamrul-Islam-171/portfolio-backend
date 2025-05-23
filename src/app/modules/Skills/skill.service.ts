
import { Request } from 'express';
import { fileUploader } from './../../middlewares/fileUploader';
import { Skill } from './skill.model';
import AppError from '../../errors/AppError';

const addSkill = async(payload: Request) => {
    
    const data = payload.body;
    
  
    const file = payload.file as Express.Multer.File ;
    let cloudinaryRes;
    let skillIcon = '';
    if(file) {
        cloudinaryRes = await fileUploader.uploadToCloudinary(file);
        skillIcon = cloudinaryRes?.secure_url || ''
    }

    const skillData = {
        skill: data?.skill,
        skillIcon:skillIcon
    }

    const res = await Skill.create(skillData);
    return res;

    // console.log(skillData)
}

const addSkillIntoDb = async(payload: Request) => {
    
    const data = payload.body;
    
  
    

    const skillData = {
        skill: data?.skill,
        skillIcon:data?.skillIcon
    }

    const res = await Skill.create(skillData);
    return res;

    // console.log(skillData)
}

const getAllSkills = async() => {
    const res = await Skill.find();
    return res;
}
const deleteFromDB = async(id:string) => {
    const isExist = await Skill.findById(id);
    if(!isExist) {
        throw new AppError(httpStatus.NOT_FOUND, "Skill not found!");
    }
    return await Skill.findByIdAndDelete(id);
}

export const skillService = {
    addSkill,
    addSkillIntoDb,
    getAllSkills,
    deleteFromDB
}