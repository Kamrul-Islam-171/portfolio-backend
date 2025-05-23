import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from 'http-status';
import { BlogService } from "./blog.service";




const add = catchAsync(async (req, res) => {


  const result = await BlogService.add(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog added successfully done!',
    data: result,
  });
});
const getAll = catchAsync(async (req, res) => {


  const result = await BlogService.getAll();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog Fetched successfully!',
    data: result,
  });
});
const update = catchAsync(async (req, res) => {

  const {id} = req.params;
  const result = await BlogService.update(id,req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog Updated successfully!',
    data: result,
  });
});
const deleteFromDB = catchAsync(async (req, res) => {

  const {id} = req.params;
  const result = await BlogService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog Deleted successfully!',
    data: result,
  });
});
const findAblog = catchAsync(async (req, res) => {

  const {id} = req.params;
  const result = await BlogService.findABlog(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog fetched successfully!',
    data: result,
  });
});


export const BlogController = {
   add,
   getAll,
   update,
   deleteFromDB,
   findAblog
}