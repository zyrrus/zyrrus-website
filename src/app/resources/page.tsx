import GridContainer from "~/app/components/grid-container";
import { Navigation } from "~/app/components/navigation/main-navigation";
import { Footer } from "~/app/components/navigation/footer";

export default function Resources() {
  return (
    <>
      <Navigation />
      <main className="mx-auto px-6 pb-24 pt-52 xl:max-w-5xl 2xl:max-w-7xl ">
        <h1 className="container display-text-['Resources'] mb-36 text-2xl">
          Resources
        </h1>
        <GridContainer
          originalItems={[
            {
              title: "HTTP Status Codes",
              date: "4/10/2024",
              tags: ["Reference", "Web"],
              route: "/resources/http-status-codes",
            },
            {
              title: "Timezone Visualization",
              date: "4/27/2024",
              tags: ["Tool", "Visualization"],
              route: "/resources/timezone",
            },
            {
              title: "Image Metadata",
              date: "5/21/2024",
              tags: ["Tool"],
              route: "/resources/image-metadata",
            },

            // {
            //   title: "Tailwind Cheat Sheet",
            //   date: "4/10/2024",
            //   tags: ["Reference", "Web", "Tailwind", "Cheat Sheet"],
            //   route: "/resources/",
            // },
            // {
            //   title: "What is a monad?",
            //   date: "4/10/2024",
            //   tags: ["Reference", "Functional Programming", "Design Patterns"],
            //   route: "/resources/",
            // },
            // {
            //   title: "Markdown Cheat Sheet",
            //   date: "4/10/2024",
            //   tags: ["Reference", "Web", "Cheat Sheet"],
            //   route: "/resources/",
            // },

            // {
            //   title: "Typing Game",
            //   date: "4/10/2024",
            //   tags: ["Tool", "Game"],
            //   route: "/resources/",
            // },
            // {
            //   title: "Design Patterns",
            //   date: "4/10/2024",
            //   tags: ["Reference", "Design Patterns"],
            //   route: "/resources/",
            // },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
