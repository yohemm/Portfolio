import { type RouteConfig, index, prefix, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('skills', 'routes/skills.tsx'),
  ...prefix('projects', [
    index('routes/projects.tsx'),
    route(':project', 'routes/singleProject.tsx')
  ]),
  route('formations', 'routes/formations.tsx')
] satisfies RouteConfig;
