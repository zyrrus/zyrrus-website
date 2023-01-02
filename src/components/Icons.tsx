import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CgFigma } from "react-icons/cg";
import { BsCloudFill } from "react-icons/bs";

type IconProps = {
  classes?: string | string[];
  removeDefaultStyles?: boolean;
};

const defaultClasses = ["text-mix", "hover:text-fg", "transition-colors"];

function getClassName(
  classes?: string | string[],
  removeDefaultStyles = false
): string {
  const classNames = [
    ...(removeDefaultStyles ? [] : defaultClasses),
    ...(Array.isArray(classes) ? classes : [classes]),
  ];
  return classNames.join(" ");
}

const GithubIcon = ({ classes, removeDefaultStyles }: IconProps) => (
  <FaGithub className={getClassName(classes, removeDefaultStyles)} />
);

const LinkedinIcon = ({ classes, removeDefaultStyles }: IconProps) => (
  <FaLinkedin className={getClassName(classes, removeDefaultStyles)} />
);

const EmailIcon = ({ classes, removeDefaultStyles }: IconProps) => (
  <MdEmail className={getClassName(classes, removeDefaultStyles)} />
);

const FigmaIcon = ({ classes, removeDefaultStyles }: IconProps) => (
  <CgFigma className={getClassName(classes, removeDefaultStyles)} />
);

const LiveIcon = ({ classes, removeDefaultStyles }: IconProps) => (
  <BsCloudFill className={getClassName(classes, removeDefaultStyles)} />
);

export { GithubIcon, LinkedinIcon, EmailIcon, FigmaIcon, LiveIcon };
