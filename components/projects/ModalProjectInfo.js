import React from "react";

const ModalProjectInfo = props => {
  const { projectInfo, setProjectInfo } = props;
  const {
    title,
    description,
    imgPath,
    imgAlt,
    githubLink,
    demoLink
  } = projectInfo;
  const handleCloseModal = () => setProjectInfo(null);

  return (
    <div
      className="justify-center items-start bg-black/70 fixed top-0 left-0 w-full h-full px-5 py-8 z-50"
      style={{ display: projectInfo ? "flex" : "none" }}
    >
      <div className="flex flex-col justify-start items-center space-y-5 p-5 bg-white max-w-3xl h-full rounded-lg overflow-y-scroll shadow-xl">
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-start items-center space-x-1">
            <a
              className="flex justify-center items-center space-x-2 bg-gray-900 px-3 py-1 rounded-md text-white shadow"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="h-4 w-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              <span>Github</span>
            </a>
            <a
              className="flex justify-center items-center space-x-2 bg-orange-600 px-3 py-1 rounded-md text-white shadow"
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="h-4 w-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />{" "}
                <path d="M13 13l6 6" />
              </svg>
              <span>Demo</span>
            </a>
          </div>
          <div>
            <button
              className="flex justify-center items-center space-x-2 bg-red-700 px-3 py-1 rounded-md text-white shadow"
              onClick={handleCloseModal}
            >
              <svg
                className="h-4 w-4 text-white"
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
                <line x1="18" y1="6" x2="6" y2="18" />{" "}
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              <span>Close</span>
            </button>
          </div>
        </div>
        <div className="shadow-md rounded-lg">
          <img src={imgPath} alt={imgAlt} />
        </div>
        <div className="flex flex-col justify-center items-start bg-gray-200 p-3 space-y-3 shadow-md rounded-lg">
          {description.map((paragraph, key) => (
            <p key={key} className="text-justify text-black">
              {key === 0 && <span className="font-bold text-lg">{title} </span>}
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalProjectInfo;
