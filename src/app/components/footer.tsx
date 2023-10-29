import { Button } from "~/app/components/ui/button";

const Footer = () => {
  return (
    <footer className="container mb-24 mt-10 text-center">
      <Button variant="link" asChild>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/zyrrus"
        >
          github.com/zyrrus
        </a>
      </Button>
      {" · "}
      <Button variant="link" asChild>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://linkedin.com/in/zyrrus"
        >
          linkedin.com/in/zyrrus
        </a>
      </Button>
    </footer>
  );
};

export { Footer };
