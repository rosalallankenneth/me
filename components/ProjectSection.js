import { useState } from "react";
import ProjectCard from "./projects/ProjectCard";
import { projectsDescription } from "../public/projects.json";
import Resume from "./Resume";
import ModalProjectInfo from "./projects/ModalProjectInfo";

export default function ProjectSection() {
  const [projectInfo, setProjectInfo] = useState(null);

  return (
    <>
      {projectInfo && (
        <ModalProjectInfo
          projectInfo={projectInfo}
          setProjectInfo={setProjectInfo}
        />
      )}

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
              <ProjectCard
                key={project.id}
                project={project}
                setProjectInfo={setProjectInfo}
              />
            ))}
          </div>
          <div className="flex justify-center space-x-3 max-w-screen-md mx-auto px-5 text-center">
            <a
              href="https://github.com/rosalallankenneth?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-start items-center space-x-2 border-2 border-blue-900 hover:border-blue-700 bg-blue-900 hover:bg-blue-700 p-3 text-white rounded transition-background duration-300"
            >
              <svg
                className="h-6 w-6 text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
              </svg>
              <span>More on my Github</span>
            </a>
            <Resume classes="flex justify-start items-center space-x-2 border-2 border-blue-900 hover:border-blue-700 bg-transparent hover:bg-blue-700 p-3 text-white rounded transition-background duration-300">
              <svg
                className="h-6 w-6 text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />{" "}
                <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />{" "}
                <line x1="3" y1="12" x2="21" y2="12" />{" "}
                <line x1="6" y1="16" x2="6" y2="18" />{" "}
                <line x1="10" y1="16" x2="10" y2="22" />{" "}
                <line x1="14" y1="16" x2="14" y2="18" />{" "}
                <line x1="18" y1="16" x2="18" y2="20" />
              </svg>
              <span>View my Resume</span>
            </Resume>
          </div>
        </div>
      </div>
    </>
  );
}
