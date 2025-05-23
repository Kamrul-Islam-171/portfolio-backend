import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from 'http-status';
import { educaitonService } from "./education.service";

const addEducation = catchAsync(async (req, res) => {


  const result = await educaitonService.addEducation(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education added successfully done!',
    data: result,
  });
});
const getEducation = catchAsync(async (req, res) => {


  const result = await educaitonService.getAllEducation();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education Fetched successfully!',
    data: result,
  });
});

const update = catchAsync(async (req, res) => {

  const {id} = req.params;
  const result = await educaitonService.update(id,req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education Updated successfully!',
    data: result,
  });
});
const deleteFromDB = catchAsync(async (req, res) => {

  const {id} = req.params;
  const result = await educaitonService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education Deleted successfully!',
    data: result,
  });
});


export const educationController = {
   addEducation,
   getEducation,
   update,
   deleteFromDB
}