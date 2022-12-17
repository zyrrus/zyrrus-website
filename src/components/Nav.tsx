import { Routes } from "data/constants";
import { useState } from "react";
import { NavLink } from "react-router-dom";

type Props = {};

export default function Nav({}: Props) {
  const [activeRoute, setActiveRoute] = useState<string>(Routes[0].name);

  return (
    <nav className="w-full">
      <ul className="mx-auto flex w-11/12 flex-row justify-between py-4 sm:w-3/4 md:w-3/5 lg:w-1/2">
        {Routes.map((route, index) => (
          <li
            key={index}
            className={
              "text-base uppercase " +
              (activeRoute === route.name
                ? "selected-highlight font-semibold opacity-100"
                : "font-normal opacity-50")
            }
          >
            <NavLink
              to={route.route}
              className={({ isActive }) => {
                if (isActive) setActiveRoute(route.name);
                return "";
              }}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="h-[2px] w-full rounded-full bg-fg" />
    </nav>
  );
}
