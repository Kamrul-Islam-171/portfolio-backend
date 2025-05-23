import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from 'http-status';
import { experienceService } from "./Experience.service";


const addexperience = catchAsync(async (req, res) => {


  const result = await experienceService.addexperience(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience added successfully done!',
    data: result,
  });
});
const getexperience = catchAsync(async (req, res) => {


  const result = await experienceService.getAllexperience();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience Fetched successfully!',
    data: result,
  });
});
const updateexperience = catchAsync(async (req, res) => {

  const {id} = req.params;
  const result = await experienceService.updateExperience(id,req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience Updated successfully!',
    data: result,
  });
});


export const experienceController = {
   addexperience,
   getexperience,
   updateexperience
}