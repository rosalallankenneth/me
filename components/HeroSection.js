export default function HeroSection() {
  return (
    <>
      <div className="hero-section min-h-screen w-full flex justify-center items-start p-4">
        <div className="flex md:flex-row flex-col justify-center items-center md:container md:mx-auto space-y-10 lg:mt-0 mt-20">
          <div className="w-full px-10">
            <h2 className="text-2xl md:text-left text-center text-blue-500 scroller min-w-md">
              <span className="w-full">
                Web Developer
                <br />
                Programmer
                <br />
                Web Designer
                <br />
                Innovator
              </span>
            </h2>

            <div className="h-1 bg-blue-700 w-10 rounded my-4 mx-auto md:ml-0"></div>
            <h1 className="text-white text-5xl md:text-left text-center">
              Allan Kenneth Rosal
            </h1>
            <p className="text-gray-300 mt-5 md:text-left text-center">
              I turn design into code, and code into product.
            </p>

            <div className="mt-10 text-center md:text-left">
              <a href="#projects">
                <button className="text-center bg-blue-700 hover:bg-blue-500 text-white px-5 p-2 rounded font-bold mr-5 transition-background duration-300">
                  What I do
                </button>
              </a>
              <a href="#knowme">
                <button className="text-center hover:bg-blue-500 text-white px-5 p-2 rounded font-bold transition-background duration-300">
                  Get To Know Me
                </button>
              </a>
            </div>
          </div>
          <div className="text-white w-full">
            <img
              src={`${process.env.ASSETS_BASE}/images/hero-img.png`}
              alt="hero-image"
              className="object-fill"
            />
          </div>
        </div>
      </div>
    </>
  );
}
