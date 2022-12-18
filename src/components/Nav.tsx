import { Routes } from "data/constants";
import { NavLink, useLocation } from "react-router-dom";

type Props = {};

export default function Nav({}: Props) {
  const location = useLocation();

  return (
    <nav className="w-full">
      <ul className="mx-auto flex w-11/12 flex-row justify-between py-4 sm:w-3/4 md:w-3/5 lg:w-1/2">
        {Routes.map((route, index) => (
          <li
            key={index}
            className={
              "text-base uppercase " +
              (location.pathname === route.route
                ? "selected-highlight font-semibold opacity-100"
                : "font-normal opacity-50")
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
