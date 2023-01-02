export default function About() {
  return (
    <>
      <h1 className="my-6 mt-14 text-4xl">About Me</h1>
      <p className="my-3 text-lg leading-loose text-mix">
        Hello! My name is Zeke Abshire and I am a software developer with over 5
        years of experience. I have a strong background in full-stack web
        development and data science, and I have worked on a variety of projects
        ranging from programming language interpreters to MVPs for startups.
      </p>

      <h2 className="my-4 mt-10 text-3xl" id="skills">
        Skills
      </h2>
      <div className="my-3 grid grid-cols-1 gap-y-6 gap-x-6 text-lg text-mix xs:grid-cols-2 md:grid-cols-4">
        <div>
          <h4 className="mb-3 text-xl text-fg">Languages</h4>
          <ul className="list-inside list-disc">
            <li>Python</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Dart</li>
            <li>C#</li>
            <li>Java</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xl text-fg">Frameworks</h4>
          <ul className="list-inside list-disc">
            <li>React</li>
            <li>Flutter</li>
            <li>TailwindCSS</li>
            <li>SCSS</li>
            <li>MUI</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xl text-fg">Tools</h4>
          <ul className="list-inside list-disc">
            <li>Firebase</li>
            <li>Git</li>
            <li>GitHub Actions</li>
            <li>Jira</li>
            <li>Figma</li>
            <li>Blender</li>
            <li>Inkscape</li>
            <li>Gimp</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xl text-fg">Experience</h4>
          <ul className="list-inside list-disc">
            <li>Team Leadership</li>
            <li>Planning + Architecture</li>
            <li>Data Science</li>
            <li>Agile/Scrum</li>
          </ul>
        </div>
      </div>

      <h2 className="my-4 mt-10 text-3xl" id="education">
        Education
      </h2>
      <p className="my-3 text-lg leading-loose text-mix">
        I'm currently pursing two bachelor's degrees from Louisiana State
        University: one in Computer Science and one in Math. I will be
        graduating in May 2023, and my GPA is 4.04 (as of the end of Fall 2022).
      </p>

      <h2 className="my-4 mt-10 text-3xl" id="awards">
        Awards
      </h2>
      <div className="flex flex-row">
        <ul className="my-5 ml-[40%] border-l-2 border-fg pl-6 text-lg text-mix xs:ml-[30%] md:ml-[20%] lg:ml-[15%]">
          <li data-semester="Fall 2022" className="award-element my-5">
            Dean's List
          </li>
          <li data-semester="Spring 2022" className="award-element my-5">
            Peg and Tom Madden Mathematics Research Scholarship, President's
            Honor Roll
          </li>
          <li data-semester="Fall 2021" className="award-element my-5">
            President's Honor Roll
          </li>
          <li data-semester="Spring 2021" className="award-element my-5">
            President's Honor Roll
          </li>
          <li data-semester="Fall 2020" className="award-element my-5">
            Dean's List
          </li>
        </ul>
      </div>

      <h2 className="my-4 mt-10 text-3xl" id="hobbies">
        Hobbies
      </h2>
      <p className="my-3 text-lg leading-loose text-mix">
        I am passionate about using technology to solve problems and make a
        positive impact, and I am always looking for new challenges and
        opportunities to learn and grow. In my free time, I enjoy playing
        musical instruments and learning new languages. I've been playing some
        form of stringed instrument since around 2014, and I had the pleasure of
        playing bass for my high school's show choir. I've also been learning
        French since kindergarten, and I've been casually learning other
        languages since around the same time I started playing instruments.
      </p>

      <p className="my-3 text-lg leading-loose text-mix">
        Thank you for visiting my portfolio!
      </p>
    </>
  );
}
