type BaseRoute = {
  name: string;
  route: string;
};

type Route = BaseRoute & {
  subroutes?: BaseRoute[];
};

const Routes: Route[] = [
  { name: "Home", route: "/" },
  {
    name: "About",
    route: "/about",
    subroutes: [
      { name: "Skills", route: "/about#skills" },
      { name: "Education", route: "/about#education" },
    ],
  },
  {
    name: "Projects",
    route: "/projects",
    subroutes: [
      { name: "Complete", route: "/projects#complete" },
      { name: "Active", route: "/projects#active" },
    ],
  },
  { name: "Work", route: "/work" },
];

export { Routes };
