import React from "react";

export default function About() {
  return (
    <>
      <h1 className="pt-16 text-4xl">About Me</h1>
      <p className="py-3 text-lg leading-loose text-mix">
        Hello! My name is Zeke Abshire and I am a software developer with over 5
        years of experience. I have a strong background in data science and
        full-stack web development and have worked on a variety of projects
        ranging from programming language interpreters to MVPs for startups.
      </p>

      {/* <h2 className="py-2 text-3xl">Skills</h2>
      <p className="py-3 text-lg leading-loose text-mix"></p> 
      columns: languages, frameworks, tools, skills */}

      <h2 className="py-2 text-3xl">Education</h2>
      <p className="py-3 text-lg leading-loose text-mix">
        I'm currently pursing two bachelor's degrees from Louisiana State
        University: one in Computer Science and one in Math. I will be
        graduating in May 2023, and my GPA is 4.04 (as of the end of Fall 2022).
      </p>

      <h2 className="py-2 text-3xl">Awards</h2>
      <div className="flex flex-row">
        <ul className="my-5 ml-[40vw] border-l-2 border-fg pl-6 text-lg text-mix xs:ml-[30vw] md:ml-[20vw]">
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

      <h2 className="py-2 text-3xl">Hobbies</h2>
      <p className="py-3 text-lg leading-loose text-mix">
        I am passionate about using technology to solve problems and make a
        positive impact, and I am always looking for new challenges and
        opportunities to learn and grow. In my free time, I enjoy playing
        musical instruments and learning new languages. I've been playing some
        form of stringed instrument since around 2014, and I had the pleasure of
        playing bass for my high school's show choir. I've also been learning
        French since kindergarten, and I've been casually learning other
        languages since around the same time I started playing instruments.
      </p>

      <p className="py-3 pb-[50vh] text-lg leading-loose text-mix">
        Thank you for visiting my portfolio!
      </p>
    </>
  );
}
