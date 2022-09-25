import React from "react";
/* eslint-disable @next/next/no-img-element */

const ProjectCard = props => {
  const {
    // id,
    title,
    type,
    // description,
    imgPath
    // imgAlt,
    // logoPath,
    // logoAlt
  } = props.project;
  return (
    <button
      // style={{'var(--image-url)': imgPath}}
      style={{ backgroundImage: `url(${imgPath})` }}
      className="relative w-full h-80 rounded bg-gray-100 bg-cover shadow-2xl shadow-blue-700/10 hover:shadow-blue-700/30"
    >
      <div className="flex flex-col justify-start items-start space-y-1 absolute bottom-0 w-full text-white p-3 bg-black/90">
        <h6 className="text-yellow-500 text-left font-bold text-xl">{title}</h6>
        <small className="text-left text-gray-300 truncate w-full">
          {type}
        </small>
      </div>
    </button>
  );
};

export default ProjectCard;
