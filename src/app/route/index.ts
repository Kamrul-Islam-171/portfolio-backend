import { Router } from 'express';
import { AuthValidationRoute } from '../modules/auth/auth.route';
import { UserRoutes } from '../modules/Users/user.route';

import { AdminRoutes } from '../modules/Users/user.admin.route';
import { SkillRoutes } from '../modules/Skills/skill.route';
import { EducationRoutes } from '../modules/Education/education.route';
import { ExperienceRoutes } from '../modules/Experience/Experience.route';
import { ProjectRoutes } from '../modules/Projects/Projects.route';
import { BlogRoutes } from '../modules/Blog/blog.route';


const router = Router();

const moduleroutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/admin',
    route: AdminRoutes,
  },
  {
    path: '/auth',
    route: AuthValidationRoute,
  },
  {
    path:'/skill',
    route:SkillRoutes
  },
  {
    path: '/education',
    route:EducationRoutes
  },
  {
    path: '/experience',
    route:ExperienceRoutes
  },
  {
    path: '/project',
    route:ProjectRoutes
  },
  {
    path: '/blog',
    route:BlogRoutes
  }

];

moduleroutes.forEach((route) => router.use(route.path, route.route));

export default router;
