export default function ContactSection() {
  return (
    <>
      <div id="contactme" className="contact-section w-full min-h-screen py-10">
        <div className="md:container md:mx-auto">
          <h2 className="text-white text-center text-2xl font-bold">
            Contact Me
          </h2>
          <div className="h-1 bg-blue-700 w-10 rounded my-4 mx-auto"></div>
          <p className="text-gray-300 text-center mt-3 px-5">
            Perhaps we can help each other. Let&apos;s connect!
          </p>
        </div>

        <div className="flex sm:flex-row flex-col justify-center items-center sm:space-x-7 space-x-0 sm:space-y-0 space-y-7 items-center my-16">
          <div className="flex flex-col sm:items-end items-center space-y-5">
            <div className="rounded-full w-48 overflow-hidden">
              <img
                className="w-full"
                src={`${process.env.ASSETS_BASE}/images/temp-pic.jpg`}
                alt="profile-pic"
              />
            </div>
            <div className="flex flex-col sm:items-end items-center space-y-1">
              <h6 className="text-white font-bold text-xl">
                Allan Kenneth Rosal
              </h6>
              <p className="text-yellow-500">Web Developer</p>
              <small className="text-gray-300">Philippines</small>
            </div>
          </div>

          <div className="flex flex-col space-y-5 border-l-2 pl-7 border-blue-500">
            {socials.map(social => (
              <div
                key={social.link}
                className="flex justify-start space-x-3 items-center"
              >
                {social.icon}
                {social.link != "#" ? (
                  <a
                    className="text-blue-200 no-underline hover:underline"
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.title}
                  </a>
                ) : (
                  <p className="text-blue-200">{social.title}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const socials = [
  {
    link: "https://github.com/rosalallankenneth",
    title: "github.com/rosalallankenneth",
    icon: (
      <svg
        className="h-8 w-8 text-blue-500"
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
    )
  },
  {
    link: "https://www.linkedin.com/in/allankennethrosal",
    title: "linkedin.com/in/allankennethrosal",
    icon: (
      <svg
        className="h-8 w-8 text-blue-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {" "}
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
        <rect x="2" y="9" width="4" height="12" />{" "}
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  },
  {
    link: "#",
    title: "allankennethrosal@gmail.com",
    icon: (
      <svg
        className="h-8 w-8 text-blue-500"
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
        <rect x="3" y="5" width="18" height="14" rx="2" />{" "}
        <polyline points="3 7 12 13 21 7" />
      </svg>
    )
  },
  {
    link: "https://wa.me/+639272759241",
    title: "(+63) 927 275 9241",
    icon: (
      <svg
        className="h-8 w-8 text-blue-500"
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
    )
  },
  {
    link: "https://m.me/aklrosal",
    title: "m.me/aklrosal",
    icon: (
      <svg
        className="h-8 w-8 text-blue-500"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
        <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
      </svg>
    )
  },
  {
    link: "https://twitter.com/llankenneth",
    title: "twitter.com/llankenneth",
    icon: (
      <svg
        className="h-8 w-8 text-blue-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {" "}
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    )
  }
];
