import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Navbar() {
  const [navbarBg, setNavbarBg] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 500) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };
  const toggleMobileNavbar = () => {
    setOpenNavbar(!openNavbar);
  };
  // window.addEventListener("scroll", changeBackground);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="w-full bg-black border-b-2 border-gray-900 p-2 z-10 transition-all ease-in-out">
        <div className="md:container md:mx-auto flex justify-between">
          <div className="relative w-24 p-3">
            <Link href="/">
              <a>
                <img
                  src={`${process.env.ASSETS_BASE}/images/logo-dark.png`}
                  alt="logo"
                  className="object-fill"
                />
              </a>
            </Link>
          </div>
          <div className="flex items-center md:hidden pr-3">
            <button onClick={toggleMobileNavbar}>
              <svg
                className={`h-8 w-8 text-white ${
                  openNavbar ? "hidden" : "relative"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`h-8 w-8 text-white ${
                  openNavbar ? "relative" : "hidden"
                }`}
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
            </button>
          </div>

          <nav className="flex-1 md:flex hidden justify-around items-center max-w-sm">
            <Link href="/">
              <a className="text-gray-300 hover:bg-gray-900 px-2 py-1 transition-background duration-300 rounded">
                Home
              </a>
            </Link>
            <Link href="/projects">
              <a className="text-gray-300 hover:bg-gray-900 px-2 py-1 transition-background duration-300 rounded">
                My Works
              </a>
            </Link>
            <Link href="#">
              <a className="text-gray-300 hover:bg-gray-900 px-2 py-1 transition-background duration-300 rounded">
                About Me
              </a>
            </Link>
            <Link href="#contactme">
              <a className="text-gray-300 bg-blue-700 hover:bg-gray-900 px-3 py-1 transition-background duration-300 rounded">
                Contact Me
              </a>
            </Link>
          </nav>
        </div>
      </header>

      <nav
        className={`flex-1 md:hidden ${
          openNavbar ? "flex" : "hidden"
        } flex-col justify-center items-left w-full bg-black border-b-2 border-gray-900 p-2`}
      >
        <Link href="/">
          <a
            className="text-white hover:bg-gray-900 py-2 px-5 border-2 border-b-0 border-gray-900 rounded-t transition-background duration-300"
            onClick={toggleMobileNavbar}
          >
            Home
          </a>
        </Link>
        <Link href="/projects">
          <a
            className="text-white hover:bg-gray-900 py-2 px-5 border-2 border-b-0 border-gray-900 transition-background duration-300"
            onClick={toggleMobileNavbar}
          >
            My Works
          </a>
        </Link>
        <Link href="/#">
          <a
            className="text-white hover:bg-gray-900 py-2 px-5 border-2 border-b-0 border-gray-900 transition-background duration-300"
            onClick={toggleMobileNavbar}
          >
            About Me
          </a>
        </Link>
        <Link href="/#contactme">
          <a
            className="text-white hover:bg-gray-900 py-2 px-5 border-2 border-gray-900 rounded-b transition-background duration-300"
            onClick={toggleMobileNavbar}
          >
            Contact Me
          </a>
        </Link>
      </nav>
    </>
  );
}
