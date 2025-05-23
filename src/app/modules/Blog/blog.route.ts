import express from 'express';

import ValidateRequest from '../../middlewares/validateRequests';

import Auth from '../../middlewares/auth';
import { BlogController } from './blog.controller';
import { blogValidation } from './blog.validation';






const router = express.Router();



// router.post('/add', fileUploader.upload.single('file'), (req:Request, res:Response, next:NextFunction) => {

//     const data = JSON.parse(req.body.data);
//     req.body = data;
//     return skillController.addSkill(req, res, next);
// });

router.post('/add',Auth('admin'), ValidateRequest(blogValidation.blogSchema),BlogController.add);
router.patch('/update/:id', Auth('admin'), ValidateRequest(blogValidation.UpdateblogSchema), BlogController.update);
router.delete('/delete/:id', Auth('admin'), BlogController.deleteFromDB);
router.get('/:id', BlogController.findAblog);
router.get('/', BlogController.getAll);


export const BlogRoutes = router;