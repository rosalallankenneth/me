import React, { useState, useEffect } from "react";

const SidebarMenu = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`flex flex-col justify-start items-center space-y-1 fixed bottom-3 right-3 bg-white p-1 border-2 border-gray-500 rounded-md shadow z-40 opacity-70 hover:opacity-100 ${
        offset > 400 ? "flex" : "hidden"
      }`}
    >
      {isCollapsed &&
        menu.map(item => (
          <a
            className="flex justify-center items-center p-1 bg-gray-300 hover:bg-gray-400 rounded w-full"
            href={item.link}
            key={item.name}
          >
            {item.icon}
          </a>
        ))}
      <button
        className="flex justify-center items-center p-1 bg-gray-300 hover:bg-gray-400 rounded w-full"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? (
          <svg
            className="h-6 w-6 text-gray-700"
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
            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />{" "}
            <polyline points="7 11 12 16 17 11" />{" "}
            <line x1="12" y1="4" x2="12" y2="16" />
          </svg>
        ) : (
          <svg
            className="h-6 w-6 text-gray-700"
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
            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />{" "}
            <polyline points="7 9 12 4 17 9" />{" "}
            <line x1="12" y1="4" x2="12" y2="16" />
          </svg>
        )}
      </button>
    </div>
  );
};

const menu = [
  {
    name: "Top",
    icon: (
      <svg
        className="h-8 w-8 text-gray-700"
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
        <line x1="4" y1="4" x2="20" y2="4" />{" "}
        <rect x="9" y="8" width="6" height="12" rx="2" />
      </svg>
    ),
    link: "#top"
  },
  {
    name: "Projects",
    icon: (
      <svg
        className="h-8 w-8 text-gray-700"
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
        <polyline points="7 8 3 12 7 16" />{" "}
        <polyline points="17 8 21 12 17 16" />{" "}
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    link: "#projects"
  },
  {
    name: "Skills",
    icon: (
      <svg
        className="h-8 w-8 text-gray-700"
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
        <line x1="12" y1="12" x2="12" y2="12.01" />{" "}
        <path
          d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10"
          transform="rotate(45 12 12)"
        />{" "}
        <path
          d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10"
          transform="rotate(-45 12 12)"
        />
      </svg>
    ),
    link: "#skills"
  },
  {
    name: "About Me",
    icon: (
      <svg
        className="h-8 w-8 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    link: "#knowme"
  },
  {
    name: "Contact Me",
    icon: (
      <svg
        className="h-8 w-8 text-gray-700"
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
        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
      </svg>
    ),
    link: "#contactme"
  }
];

export default SidebarMenu;
