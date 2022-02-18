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
            I build dynamic websites—from sophisticated landing pages to complex
            web systems and applications.
          </p>
          <div className="max-w-screen-md mx-auto mt-5 p-5 flex flex-col md:flex-row justify-center items-start md:space-x-5 space-y-5 md:space-y-0">
            <div className="bg-gray-300 w-full h-80 min-h-full rounded">
              Project 1
            </div>
            <div className="flex flex-col justify-start space-y-5 w-full h-160 md:h-80 min-h-full">
              <div className="bg-gray-300 rounded h-80 md:h-40">Project 2</div>
              <div className="bg-gray-300 rounded h-80 md:h-40">Project 3</div>
            </div>
          </div>
          <div className="max-w-screen-md mx-auto px-5 text-center">
            <button className="border-2 border-blue-700 bg-transparent hover:bg-blue-700 py-3 px-5 text-white rounded transition-background duration-300">
              View All Works
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
