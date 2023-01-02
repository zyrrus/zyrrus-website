import circleGradientLogo from "assets/figma.png";
import { GithubIcon, EmailIcon, LinkedinIcon } from "components/Icons";
import { Routes } from "data/constants";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex flex-col gap-y-12 py-16 md:gap-y-6">
      <Bar />
      <div className="items-left mx-4 flex flex-col items-start gap-8 xs:mx-10 xs:items-center md:flex-row md:items-start md:justify-between">
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
        <div className="flex flex-col gap-y-6 gap-x-8 text-mix xs:flex-row">
          {Routes.map((route) => (
            <div key={route.name} className="flex grow flex-col gap-y-2">
              <NavLink
                to={route.route}
                className="font-semibold transition-colors hover:text-fg"
              >
                {route.name}
              </NavLink>
              {route.subroutes?.map((subroute, j) => (
                <NavLink
                  key={j}
                  className="text-sm font-light transition-colors hover:text-fg"
                  to={subroute.route}
                >
                  {subroute.name}
                </NavLink>
              ))}
            </div>
          ))}
        </div>
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
