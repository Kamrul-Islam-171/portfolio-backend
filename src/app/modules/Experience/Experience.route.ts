import express from 'express';

import ValidateRequest from '../../middlewares/validateRequests';
import { experienceValidation } from './Experience.validation';
import { experienceController } from './Experience.controllter';
import Auth from '../../middlewares/auth';




const router = express.Router();


router.post('/add',Auth('admin'), ValidateRequest(experienceValidation.experienceZodSchema), experienceController.addexperience);
router.patch('/update/:id', Auth('admin'), ValidateRequest(experienceValidation.updateZodSchema), experienceController.updateexperience)
router.get('/', experienceController.getexperience);


export const ExperienceRoutes = router;