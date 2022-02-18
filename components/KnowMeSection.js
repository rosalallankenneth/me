import { useState } from "react";
import { aboutDescription } from "../public/about.json";

export default function KnowMeSection() {
  const [aboutIdx, setAboutIdx] = useState(0);
  const nextIdx = () => {
    if (aboutIdx < 2) {
      setAboutIdx(aboutIdx + 1);
    }
  };
  const prevIdx = () => {
    if (aboutIdx > 0) {
      setAboutIdx(aboutIdx - 1);
    }
  };

  return (
    <>
      <div id="knowme" className="w-full min-h-screen bg-gray-100 py-10">
        <div className="md:container md:mx-auto">
          <h2 className="text-black text-center text-2xl font-bold">
            Get To Know Me
          </h2>
          <div className="h-1 bg-blue-700 w-10 rounded my-4 mx-auto"></div>
          <p className="text-gray-900 text-center mt-3 px-5">
            I little bit about myself.
          </p>

          <div className="relative rounded-lg block md:flex items-center bg-white shadow-xl mt-10 mx-5">
            <div
              className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
              style={{ minHeight: "19rem" }}
            >
              <img
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={aboutDescription[aboutIdx].imgPath}
                alt=""
              />
              <div className="absolute inset-0 w-full h-full bg-blue-900 opacity-50"></div>
              <div className="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">
                <p className="lg:block md:hidden block text-4xl font-bold italic text-center">
                  {aboutDescription[aboutIdx].title}
                </p>
                <p className="lg:hidden md:block hidden text-4xl font-bold italic text-center leading-tight">
                  {aboutDescription[aboutIdx].title.split(" ")[0]} <br />
                  {aboutDescription[aboutIdx].title.split(" ")[1]}{" "}
                  {aboutDescription[aboutIdx].title.split(" ")[2]}
                </p>
              </div>
            </div>
            <div className="w-full md:w-3/5 h-full flex items-center bg-white rounded-lg">
              <div className="p-12 md:pr-24 md:pl-16 md:py-12 h-full overflow-hidden">
                <p className="text-gray-700 lg:text-lg md:text-sm text-lg">
                  {aboutDescription[aboutIdx].description}
                </p>
                <a
                  className="flex items-baseline mt-5 text-blue-700 hover:text-blue-900"
                  href=""
                >
                  <span>Learn more</span>
                  <span className="text-xs ml-1">&#x279c;</span>
                </a>
              </div>
              <svg
                className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
            </div>
            <button
              className={`absolute top-0 mt-32 left-0 bg-white shadow-md rounded-r h-12 w-12 text-2xl focus:outline-none focus:shadow-outline ${
                aboutIdx <= 0
                  ? "text-gray-300"
                  : "text-blue-700 hover:text-blue-900"
              }`}
              onClick={prevIdx}
            >
              <span className="block" style={{ transform: "scale(-1)" }}>
                &#x279c;
              </span>
            </button>
            <button
              className={`absolute top-0 mt-32 right-0 bg-white shadow-md rounded-l h-12 w-12 text-2xl focus:outline-none focus:shadow-outline ${
                aboutIdx >= 2
                  ? "text-gray-300"
                  : "text-blue-700 hover:text-blue-900"
              }`}
              onClick={nextIdx}
            >
              <span className="block" style={{ transform: "scale(1)" }}>
                &#x279c;
              </span>
            </button>
          </div>

          <div className="hidden md:flex justify-center items-center mt-10 space-x-10">
            <button className="w-28 h-28" onClick={() => setAboutIdx(0)}>
              <svg
                className={
                  aboutIdx <= 0
                    ? "text-blue-900"
                    : "text-gray-500 hover:text-gray-700"
                }
                fill="none"
                viewBox="0 0 25 25"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
            <button className="w-28 h-28" onClick={() => setAboutIdx(1)}>
              <svg
                className={
                  aboutIdx === 1
                    ? "text-blue-900"
                    : "text-gray-500 hover:text-gray-700"
                }
                fill="none"
                viewBox="0 0 25 25"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
            <button className="w-28 h-28" onClick={() => setAboutIdx(2)}>
              <svg
                className={
                  aboutIdx >= 2
                    ? "text-blue-900"
                    : "text-gray-500 hover:text-gray-700"
                }
                fill="none"
                viewBox="0 0 25 25"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
