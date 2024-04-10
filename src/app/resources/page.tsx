import GridContainer from "~/app/components/grid-container";
import { BreadcrumbNav } from "~/app/components/navigation/breadcrumb-nav";

export default function Resources() {
  return (
    <main className="p-24">
      <BreadcrumbNav page="Resources" />
      <GridContainer originalItems={[]} />
    </main>
  );
}
