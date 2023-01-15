import fillerImage from "assets/missing-file.svg";
import dropnoteImage from "assets/dropnote.png";
import personalSiteImage from "assets/personal-website.png";
import flurryImage from "assets/flurry.png";
import penningtonImage from "assets/pennington.png";

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
    // Pennington
    {
      title: "ALM Prediction | LSU Math & Pennington Biomed.",
      date: "Summer 2022 - Fall 2022",
      stack: "Python, PyTorch, PyCaret, SKLearn, Numpy, Pandas",
      links: {},
      image: penningtonImage,
      description: [
        "I had the opportunity to work on a machine learning project with a group of students from LSU over the summer, with support from the Pennington Biomedical Research Center. Our goal was to predict appendicular lean muscle mass (ALM) based on body measurements collected using one of Pennington's machines. We were successful in developing a neural network model that was more accurate than a linear model developed in a previous research effort at the center. We are currently writing a paper on our findings and hope to publish it in the near future.",
      ],
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
      image: personalSiteImage,
      description: [
        "Used the stack above. Set up continuous deployment with GitHub Actions. Hosted on Firebase.",
      ],
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
        "Parallel is a platform that connects educators and animators to create new educational content for YouTube or other platforms. This was my first project using React, Firebase, and Figma, and I gained valuable experience in full-stack development as a result. The project was put in a temporarily complete state, but I plan on reviving it in the near future. I'm excited to continue working on Parallel and to see it fully realized after gaining hundreds of hours of experience since its original completion.",
      ],
      image: fillerImage,
    },
    // Flurry
    {
      title: "Flurry | Personal Project",
      stack: "React, Typescript, Firebase (so far)",
      date: "Dec 2022 - Present",
      links: {
        figma:
          "https://www.figma.com/file/jK6Sks2baD9CHhISlLowva/Flurry?node-id=1%3A2&t=Cy2r7kSEeoHuMAUq-1",
        live: "https://learnflurry.github.io/waitlist/",
      },
      description: [
        "I'm currently working on a personal project called Flurry, a language learning app that aims to combine the best features of the most popular apps while remaining free with an optional, unobtrusive paid plan. I spent much of the first month researching and testing a handful of the most popular language learning apps and teaching methods to gather ideas and inspiration for Flurry. I'm excited to begin developing this project further and to bring a unique and valuable language learning experience to users.",
      ],
      image: flurryImage,
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
      live: "https://vigilus.com",
    },
    description: [
      "I primarily work on the company website using React, MUI, and Firebase. I have gained valuable experience working in an agile environment, where I was able to apply my technical skills and contribute to the development of the website.",
    ],
  },
  // NRL
  {
    title: "Software Developer Internship | Naval Research Lab",
    stack: "C#/.NET, WPF, ArcGIS Pro SDK",
    date: "June 2022 - November 2022",
    links: {},
    description: [
      "I had the opportunity to work on a project to migrate a 20-year-old legacy ArcMap plugin to ArcGIS Pro. I rewrote the project using C# and the ArcGIS Pro SDK, while working with WPF and the MVVC pattern. It was a challenging but rewarding experience, and I gained valuable insight and practical skills for maintaining and refactoring legacy systems.",
    ],
  },
];

export { ProjectsList, JobList };
export type { Project };
