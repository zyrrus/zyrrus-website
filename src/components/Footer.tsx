import circleGradientLogo from "assets/figma.png";
import { GithubIcon, EmailIcon, LinkedinIcon } from "components/Icons";
import { Routes } from "data/constants";
import { NavLink } from "react-router-dom";

export default function Footer() {
  function convertSubRoutesToRows() {
    const maxNumSubRoutes: number =
      Routes.reduce((routeA, routeB) =>
        (routeA.subroutes?.length ?? 0) > (routeB.subroutes?.length ?? 0)
          ? routeA
          : routeB
      ).subroutes?.length ?? 0;

    const subroutes = Array.from(Array(maxNumSubRoutes).keys()).map((i) =>
      Routes.map((route) =>
        route.subroutes === undefined ? null : route.subroutes[i]
      )
    );

    return subroutes;
  }

  return (
    <div className="flex flex-col gap-y-12 py-16 md:gap-y-6">
      <Bar />
      <div className="mx-10 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
        {/* Left Side */}
        <div className="flex flex-col gap-y-3">
          <div className=" flex w-full flex-row items-center gap-x-3">
            <Circle />
            <h3 className="justify-self-start text-2xl font-semibold">
              Zeke Abshire
            </h3>
          </div>

          <Link
            icon={<EmailIcon classes="w-[52px] text-2xl" removeDefaultStyles />}
            label="zekeabshire@gmail.com"
            link="mailto:zekeabshire@gmail.com"
          />

          <Link
            icon={
              <GithubIcon classes="w-[52px] text-2xl" removeDefaultStyles />
            }
            label="github.com/zyrrus"
            link="https://github.com/zyrrus/"
          />

          <Link
            icon={
              <LinkedinIcon classes="w-[52px] text-2xl" removeDefaultStyles />
            }
            label="linkedin.com/in/zyrrus"
            link="https://www.linkedin.com/in/zyrrus/"
          />
        </div>

        {/* Right Side */}
        <table className="-mx-5 h-max w-max table-fixed border-separate border-spacing-x-10 border-spacing-y-2 text-mix">
          <thead className="text-left font-semibold">
            <tr>
              {Routes.map((route) => (
                <th
                  key={route.name}
                  className="transition-colors hover:text-fg"
                >
                  <NavLink to={route.route}>{route.name}</NavLink>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm font-light">
            {convertSubRoutesToRows().map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) =>
                  cell === null ? (
                    <td key={i + "_" + j}></td>
                  ) : (
                    <td
                      key={i + "_" + j}
                      className="transition-colors hover:text-fg"
                    >
                      <NavLink to={cell.route}>{cell.name}</NavLink>
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Bar() {
  return <div className="h-[2px] w-full rounded-full bg-fg" />;
}

function Circle() {
  return (
    <img
      src={circleGradientLogo}
      alt="Circle gradient logo"
      className="aspect-square w-14 animate-[spin_3s_linear_infinite]"
    />
  );
}

type LinkProps = {
  icon: JSX.Element;
  link: string;
  label: string;
};

function Link({ label, link, icon }: LinkProps) {
  return (
    <a
      href={link}
      className="flex w-full flex-row items-center gap-x-3 text-mix transition-colors hover:text-fg"
    >
      {icon}
      {label}
    </a>
  );
}
