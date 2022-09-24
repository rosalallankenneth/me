import React from 'react'
/* eslint-disable @next/next/no-img-element */

const ProjectCard = (props) => {
  const { id, title, description, imgPath, imgAlt} = props.project;
  return (
    <div
      // style={{'var(--image-url)': imgPath}}
      style={{backgroundImage: `url(${imgPath})`}}
      className={`relative w-full h-80 min-h-full rounded bg-gray-100 bg-cover`}
    >
      <div className="w-full absolute bottom-0 left-0 bg-blue-900">
        {title}
      </div>
    </div>
  )
}

export default ProjectCard
