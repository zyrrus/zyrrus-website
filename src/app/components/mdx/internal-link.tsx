import { type AnchorHTMLAttributes } from "react";

const InternalLink = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return <a {...props} />;
};

export { InternalLink };
