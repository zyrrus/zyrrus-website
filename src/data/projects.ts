type Project = {
  title: string;
  date: string;
  // Github link
  // Live link
  description: string[];
  images: string[];
};

const ProjectsList: Project[] = [
  // Crimer
  {
    title: "Software Developer Internship | Vigilus",
    date: "November 2022 - Present",
    description: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate placeat odio facilis id nesciunt nulla possimus praesentium blanditiis ut distinctio, quisquam beatae accusamus, officia ratione atque dignissimos molestias dolor voluptas quaerat ad iure sapiente hic adipisci. Consequuntur atque quisquam cumque placeat temporibus vero sint mollitia harum eligendi, ea facilis nobis.",
    ],
    images: [
      "https://picsum.photos/id/131/500/300",
      "https://picsum.photos/id/342/500/300",
    ],
  },
  // DropNote
  {
    title: "DropNote | Senior Project",
    date: "Fall 2022",
    description: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate placeat odio facilis id nesciunt nulla possimus praesentium blanditiis ut distinctio, quisquam beatae accusamus, officia ratione atque dignissimos molestias dolor voluptas quaerat ad iure sapiente hic adipisci. Consequuntur atque quisquam cumque placeat temporibus vero sint mollitia harum eligendi, ea facilis nobis.",
    ],
    images: [
      "https://picsum.photos/id/354/500/300",
      "https://picsum.photos/id/434/500/300",
    ],
  },
  // NRL
  {
    title: "Software Developer Internship | Naval Research Lab",
    date: "November 2022 - Present",
    description: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate placeat odio facilis id nesciunt nulla possimus praesentium blanditiis ut distinctio, quisquam beatae accusamus, officia ratione atque dignissimos molestias dolor voluptas quaerat ad iure sapiente hic adipisci. Consequuntur atque quisquam cumque placeat temporibus vero sint mollitia harum eligendi, ea facilis nobis.",
    ],
    images: [
      "https://picsum.photos/id/562/500/300",
      "https://picsum.photos/id/635/500/300",
    ],
  },
];

export { ProjectsList };
export type { Project };
