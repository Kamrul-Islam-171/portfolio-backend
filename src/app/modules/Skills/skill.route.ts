import express from 'express';
import { skillController } from './skill.controller';
import ValidateRequest from '../../middlewares/validateRequests';
import { skillValidationSchema } from './skill.validation';
import Auth from '../../middlewares/auth';

// import { fileUploader } from '../../middlewares/fileUploader';



const router = express.Router();



// router.post('/add', fileUploader.upload.single('file'), (req:Request, res:Response, next:NextFunction) => {

//     const data = JSON.parse(req.body.data);
//     req.body = data;
//     return skillController.addSkill(req, res, next);
// });

router.post('/add', Auth('admin'), ValidateRequest(skillValidationSchema.skillValidation), skillController.addSkill);
router.delete('/delete/:id', Auth('admin'), skillController.deleteFromDB);
router.get('/', skillController.getAllSkill);


export const SkillRoutes = router;