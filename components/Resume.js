import React from "react";

const Resume = ({ classes, children }) => {
  return (
    <a
      href={`${process.env.ASSETS_BASE}/resume.pdf`}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {children}
    </a>
  );
};

export default Resume;
