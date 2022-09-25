import ProjectCard from "./projects/ProjectCard";
import { projectsDescription } from "../public/projects.json";

export default function ProjectSection() {
  return (
    <>
      <div
        id="projects"
        className="project-section w-full min-h-screen bg-blue-700 py-10"
      >
        <div className="md:container md:mx-auto">
          <h2 className="text-white text-center text-2xl font-bold">
            What I Do
          </h2>
          <div className="h-1 bg-blue-700 w-10 rounded my-4 mx-auto"></div>
          <p className="text-gray-300 text-center mt-3 px-5">
            I can build dynamic websites—from sophisticated landing pages to
            complex web systems and applications. Here are some of my featured
            projects.
          </p>
          <div className="max-w-screen-lg mx-auto my-5 p-5 flex flex-col md:flex-row justify-center items-start md:space-x-5 space-y-5 md:space-y-0">
            {projectsDescription.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="flex justify-center space-x-3 max-w-screen-md mx-auto px-5 text-center">
            <a
              href="https://github.com/rosalallankenneth?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-900 hover:border-blue-700 bg-blue-900 hover:bg-blue-700 p-3 text-white rounded transition-background duration-300"
            >
              More on my Github
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-900 hover:border-blue-700 bg-transparent hover:bg-blue-700 p-3 text-white rounded transition-background duration-300"
            >
              Download my Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
