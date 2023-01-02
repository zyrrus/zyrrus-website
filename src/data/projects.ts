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
  images: string[];
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
        "For my senior project, I led a team to develop DropNote, a full-stack file sharing platform for professors. We built the platform using Flutter for the frontend and Firebase for the backend.",
        "One of my main responsibilities was designing the user interface (UI) for the platform. I used Figma to create a modern and minimal design that would be easy for professors to use. We received a lot of positive feedback from our target users, and I was able to make adjustments to the UI based on their suggestions.",
        "Overall, the project was a great opportunity for me to hone my skills in project management, team collaboration, and full-stack development. I'm proud of the end result and believe that DropNote has the potential to greatly improve the way professors share and access files with their students.",
      ],
      images: [
        "https://picsum.photos/id/354/500/300",
        "https://picsum.photos/id/434/500/300",
      ],
    },
    // This
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
    // Flurry
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
};

const JobList: Project[] = [
  // Crimer
  //   {
  //     title: "Software Developer Internship | Vigilus",
  //     date: "November 2022 - Present",
  //     description: [
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate placeat odio facilis id nesciunt nulla possimus praesentium blanditiis ut distinctio, quisquam beatae accusamus, officia ratione atque dignissimos molestias dolor voluptas quaerat ad iure sapiente hic adipisci. Consequuntur atque quisquam cumque placeat temporibus vero sint mollitia harum eligendi, ea facilis nobis.",
  //     ],
  //     images: [
  //       "https://picsum.photos/id/131/500/300",
  //       "https://picsum.photos/id/342/500/300",
  //     ],
  //   },
  // NRL
  //   {
  //     title: "Software Developer Internship | Naval Research Lab",
  //     date: "November 2022 - Present",
  //     description: [
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate placeat odio facilis id nesciunt nulla possimus praesentium blanditiis ut distinctio, quisquam beatae accusamus, officia ratione atque dignissimos molestias dolor voluptas quaerat ad iure sapiente hic adipisci. Consequuntur atque quisquam cumque placeat temporibus vero sint mollitia harum eligendi, ea facilis nobis.",
  //     ],
  //     images: [
  //       "https://picsum.photos/id/562/500/300",
  //       "https://picsum.photos/id/635/500/300",
  //     ],
  //   },
];

//     // DropNote
//     {
//       title: "DropNote | Senior Project",
//       date: "Fall 2022",
//       description: [
//         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate placeat odio facilis id nesciunt nulla possimus praesentium blanditiis ut distinctio, quisquam beatae accusamus, officia ratione atque dignissimos molestias dolor voluptas quaerat ad iure sapiente hic adipisci. Consequuntur atque quisquam cumque placeat temporibus vero sint mollitia harum eligendi, ea facilis nobis.",
//       ],
//       images: [
//         "https://picsum.photos/id/354/500/300",
//         "https://picsum.photos/id/434/500/300",
//       ],
//     },

export { ProjectsList, JobList };
export type { Project };
