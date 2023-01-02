import fillerImage from "assets/missing-file.svg";
import dropnoteImage from "assets/dropnote.png";

type Project = {
  title: string;
  stack: string;
  date: string;
  links: {
    github?: string;
    live?: string;
    figma?: string;
  };
  description: string[];
  image?: string;
};

const ProjectsList: {
  complete: Project[];
  active: Project[];
} = {
  complete: [
    // DropNote
    {
      title: "DropNote | Senior Project",
      stack: "Flutter, Firebase",
      date: "Fall 2022",
      links: {
        github: "https://github.com/zyrrus/dropnote",
        figma:
          "https://www.figma.com/file/59sRcvm4AzJ2IjPota8OY6/DropNote-V1?node-id=104%3A2987&t=ATFk9o0En91H4FSO-1",
      },
      description: [
        "I had the opportunity to lead a team in the development of DropNote, a full-stack file sharing platform for professors. As the team lead, I oversaw the project from start to finish and ensured that we were meeting our milestones and delivering a high-quality product. I also served as the software architect, designing the overall structure and flow of the application.",
        "In addition to my technical roles, I also served as the UI designer for the project. I used Figma to design a modern and minimal interface that was easy for professors to use. We built the platform using Firebase and Flutter, which allowed us to create a fast and reliable application.",
      ],
      image: dropnoteImage,
    },
    // This Website
    {
      title: "This Personal Portfolio Website",
      date: "December 2022",
      stack: "React, TypeScript, TailwindCSS, Figma",
      links: {
        figma:
          "https://www.figma.com/file/MLDb7qneMHwkDTr5N7cgtR/Personal-Website?node-id=0%3A1&t=RT4oqOPS3gQyVJjv-1",
        github: "https://github.com/zyrrus/zyrrus-website",
        live: "https://zyrrus.dev",
      },
      description: [],
    },
    // Todo CLI
    // {
    //   title: "Software Developer Internship | Vigilus",
    //   date: "November 2022 - Present",
    //   description: [
    //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate placeat odio facilis id nesciunt nulla possimus praesentium blanditiis ut distinctio, quisquam beatae accusamus, officia ratione atque dignissimos molestias dolor voluptas quaerat ad iure sapiente hic adipisci. Consequuntur atque quisquam cumque placeat temporibus vero sint mollitia harum eligendi, ea facilis nobis.",
    //   ],
    //   images: [
    //     "https://picsum.photos/id/131/500/300",
    //     "https://picsum.photos/id/342/500/300",
    //   ],
    // },
  ],
  active: [
    // Parallel
    {
      title: "Parallel | Personal Project",
      stack: "React, Firebase, SCSS, Figma",
      date: "August 2021; Jan 2023 - Present",
      links: {
        live: "https://parallel-70089.web.app/",
        github: "https://github.com/zyrrus/parallel",
        figma:
          "https://www.figma.com/file/IRzlxzz3J1E5khOpmk2KSN/Parallel?node-id=0%3A1&t=PuRMisg0rAGYa6GO-1",
      },
      description: [
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate placeat odio facilis id nesciunt nulla possimus praesentium blanditiis ut distinctio, quisquam beatae accusamus, officia ratione atque dignissimos molestias dolor voluptas quaerat ad iure sapiente hic adipisci. Consequuntur atque quisquam cumque placeat temporibus vero sint mollitia harum eligendi, ea facilis nobis.",
      ],
      image: fillerImage,
    },
    // Flurry
    {
      title: "Flurry | Personal Project",
      stack: "TBD",
      date: "Dec 2022 - Present",
      links: {},
      description: [
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate placeat odio facilis id nesciunt nulla possimus praesentium blanditiis ut distinctio, quisquam beatae accusamus, officia ratione atque dignissimos molestias dolor voluptas quaerat ad iure sapiente hic adipisci. Consequuntur atque quisquam cumque placeat temporibus vero sint mollitia harum eligendi, ea facilis nobis.",
      ],
      image: fillerImage,
    },
  ],
};

const JobList: Project[] = [
  // Crimer
  {
    title: "Software Developer Internship | Vigilus",
    stack: "React, MUI, Firebase, TypeScript, Jira",
    date: "November 2022 - Present",
    links: {
      //   live: "https://vigilus.com",
    },
    description: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate placeat odio facilis id nesciunt nulla possimus praesentium blanditiis ut distinctio, quisquam beatae accusamus, officia ratione atque dignissimos molestias dolor voluptas quaerat ad iure sapiente hic adipisci. Consequuntur atque quisquam cumque placeat temporibus vero sint mollitia harum eligendi, ea facilis nobis.",
    ],
  },
  // NRL
  {
    title: "Software Developer Internship | Naval Research Lab",
    stack: "C#/.NET, WPF, ArcGIS Pro SDK",
    date: "June 2022 - November 2022",
    links: {},
    description: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate placeat odio facilis id nesciunt nulla possimus praesentium blanditiis ut distinctio, quisquam beatae accusamus, officia ratione atque dignissimos molestias dolor voluptas quaerat ad iure sapiente hic adipisci. Consequuntur atque quisquam cumque placeat temporibus vero sint mollitia harum eligendi, ea facilis nobis.",
    ],
  },
];

export { ProjectsList, JobList };
export type { Project };
