import { GoProject } from "react-icons/go";
import { HighlightCardRow } from "~/app/components/highlight-card-row";

export default function Featured() {
  return (
    <section className="flex flex-col gap-y-12">
      <HighlightCardRow
        title="Featured"
        items={Array.from({ length: 10 }, (_, index) => ({
          title: "Parallel",
          subtitle: "Next.js · Tailwind · tRPC · Prisma · NextAuth",
          route: "/",
          image: `https://picsum.photos/seed/${index + 1}/540/240/`,
          icon: <GoProject />,
        }))}
      />
    </section>
  );
}
