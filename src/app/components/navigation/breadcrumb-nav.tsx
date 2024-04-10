import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/app/components/ui/breadcrumb";

interface BreadcrumbNavProps {
  routes?: { label: string; href: string }[];
  page: string;
}

export const BreadcrumbNav = ({ routes, page }: BreadcrumbNavProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <Image
              src="/rainbow-ring.png"
              alt="Home"
              width={24}
              height={24}
              className="motion-safe:duration-2000 motion-safe:animate-spin"
            />
          </BreadcrumbLink>
        </BreadcrumbItem>

        {routes?.map(({ label, href }) => (
          <>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
            </BreadcrumbItem>
          </>
        ))}

        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>{page}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
