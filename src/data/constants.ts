type Route = {
  name: string;
  route: string;
};

const Routes = [
  { name: "Home", route: "/" },
  { name: "About", route: "about" },
  { name: "Projects", route: "projects" },
  { name: "Work", route: "work" },
] as Route[];

export { Routes };
