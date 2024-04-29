import Image from "next/image";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/app/components/ui/breadcrumb";

export interface BreadcrumbNavProps {
  routes?: { label: string; href: string }[];
  page: string;
  className?: string;
}

export const BreadcrumbNav = ({
  routes,
  page,
  className,
}: BreadcrumbNavProps) => {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="hover:animate-pulse">
            <Image
              src="/rainbow-ring.png"
              alt="Home"
              width={24}
              height={24}
              className="motion-safe:animate-spin motion-safe:duration-2000"
            />
          </BreadcrumbLink>
        </BreadcrumbItem>

        {routes?.map(({ label, href }) => (
          <React.Fragment key={label}>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
            </BreadcrumbItem>
          </React.Fragment>
        ))}

        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>{page}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
