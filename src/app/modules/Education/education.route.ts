import express from 'express';

import ValidateRequest from '../../middlewares/validateRequests';
import { educationValidation } from './education.validation';
import { educationController } from './education.controllter';
import Auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/add',
  Auth('admin'),
  ValidateRequest(educationValidation.educationZodSchema),
  educationController.addEducation,
);
router.patch(
  '/update/:id',
  Auth('admin'),
  ValidateRequest(educationValidation.educationUpdateZodSchema),
  educationController.update,
);
router.delete('/delete/:id', Auth('admin'), educationController.deleteFromDB);
router.get('/', educationController.getEducation);

export const EducationRoutes = router;
