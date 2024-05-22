import { ResourceHeader } from "~/app/components/navigation/resource-header";
import { ImageUpload } from "~/app/resources/(tools)/image-metadata/image-upload";

export default function Page() {
  return (
    <>
      <ResourceHeader
        routes={[{ label: "Resources", href: "/resources" }]}
        page="Image Metadata"
      />
      <main className="container my-20">
        <ImageUpload />
      </main>
    </>
  );
}
