import { Button } from "~/app/components/ui/button";

const Footer = () => {
  return (
    <footer className="container mb-24 mt-10 text-center">
      <div className="flex flex-col gap-y-3">
        <div>
          <Button variant="link" asChild>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/zyrrus"
            >
              github.com/zyrrus
            </a>
          </Button>
          <Button variant="link" asChild>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/zyrrus"
            >
              linkedin.com/in/zyrrus
            </a>
          </Button>
        </div>
        <p className="text-sm text-secondary">
          &copy; {new Date().getFullYear()} Zeke Abshire
        </p>
      </div>
    </footer>
  );
};

export { Footer };
