import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from 'http-status';
import { skillService } from "./skill.service";
const addSkill = catchAsync(async (req, res) => {
//   const skillData = req.body;

  const result = await skillService.addSkillIntoDb(req)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill added successfully done!',
    data: result,
  });
});
const getAllSkill = catchAsync(async (req, res) => {
//   const skillData = req.body;

  const result = await skillService.getAllSkills()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill fetched successfully!',
    data: result,
  });
});

const deleteFromDB = catchAsync(async (req, res) => {

  const {id} = req.params;
  const result = await skillService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill Deleted successfully!',
    data: result,
  });
});

export const skillController = {
    addSkill,
    getAllSkill,
    deleteFromDB
}