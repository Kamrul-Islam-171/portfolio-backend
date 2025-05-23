import express from 'express';

import ValidateRequest from '../../middlewares/validateRequests';

import Auth from '../../middlewares/auth';
import { projectValidation } from './Projects.validation';
import { ProjectController } from './Projects.controller';





const router = express.Router();



// router.post('/add', fileUploader.upload.single('file'), (req:Request, res:Response, next:NextFunction) => {

//     const data = JSON.parse(req.body.data);
//     req.body = data;
//     return skillController.addSkill(req, res, next);
// });

router.post('/add',Auth('admin'), ValidateRequest(projectValidation.projectZodSchema),ProjectController.add);
router.patch('/update/:id', Auth('admin'), ValidateRequest(projectValidation.updateProjectZodSchema), ProjectController.update);
router.delete('/delete/:id', Auth('admin'), ProjectController.deleteFromDB);
router.get('/:id', ProjectController.getAProject);
router.get('/', ProjectController.getAll);


export const ProjectRoutes = router;