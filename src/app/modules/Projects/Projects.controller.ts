import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from 'http-status';
import { ProjectService } from "./Projects.service";



const add = catchAsync(async (req, res) => {


  const result = await ProjectService.add(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project added successfully done!',
    data: result,
  });
});
const getAll = catchAsync(async (req, res) => {


  const result = await ProjectService.getAll();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project Fetched successfully!',
    data: result,
  });
});
const update = catchAsync(async (req, res) => {

  const {id} = req.params;
  const result = await ProjectService.update(id,req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project Updated successfully!',
    data: result,
  });
});
const deleteFromDB = catchAsync(async (req, res) => {

  const {id} = req.params;
  const result = await ProjectService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project Deleted successfully!',
    data: result,
  });
});
const getAProject = catchAsync(async (req, res) => {

  const {id} = req.params;
  const result = await ProjectService.getAProject(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project Fetched successfully!',
    data: result,
  });
});


export const ProjectController = {
   add,
   getAll,
   update,
   deleteFromDB,
   getAProject
}