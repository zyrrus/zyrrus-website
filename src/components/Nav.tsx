import { Routes } from "data/constants";
import { NavLink, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  return (
    <nav className="w-full">
      <ul className="mx-auto flex w-11/12 flex-row justify-between py-4 sm:w-3/4 md:w-3/5 lg:w-1/2">
        {Routes.map((route, index) => (
          <li
            key={index}
            className={
              "text-base uppercase hover:text-fg " +
              (location.pathname === route.route
                ? "selected-highlight font-semibold text-fg"
                : "font-normal text-mix")
            }
          >
            <NavLink to={route.route}>{route.name}</NavLink>
          </li>
        ))}
      </ul>
      <div className="h-[2px] w-full rounded-full bg-fg" />
    </nav>
  );
}
