import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('skills', "routes/skills.tsx"),
    route('projects', "routes/projects.tsx"),
    route('projects/:project', "routes/singleProject.tsx"),
    route('formations', "routes/formations.tsx")
] satisfies RouteConfig;
