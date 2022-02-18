export default function SkillsCarousel(props) {
  const { directionDefault, data, title } = props;
  return (
    <>
      <div
        className={`container mx-auto w-full overflow-hidden relative border-blue-900 mt-10`}
      >
        <div className="w-full h-full absolute">
          <div
            className="w-1/4 h-full absolute z-50 left-0"
            style={{
              background:
                "linear-gradient(to right, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)"
            }}
          ></div>
          <div
            className="w-1/4 h-full absolute z-50 right-0"
            style={{
              background:
                "linear-gradient(to left, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)"
            }}
          ></div>
        </div>

        <h4 className="font-bold bg-blue-900 text-white p-2 text-center rounded-t">
          {title}
        </h4>
        <div
          className="carousel-items flex items-center justify-center py-10 rounded-b"
          style={{
            width: "fit-content",
            animation: directionDefault
              ? "carouselAnim 10s infinite alternate linear"
              : "carouselAnimReverse 10s infinite alternate linear"
          }}
        >
          {data.map(img => (
            <CarouselItem
              key={img.id}
              imgPath={img.path}
              imgAlt={img.alt}
              label={img.label}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export function CarouselItem(props) {
  const { imgPath, imgAlt, label } = props;

  return (
    <>
      <div
        className="carousel-focus flex items-center flex-col relative"
        style={{ width: "200px" }}
      >
        <img className="w-1/2" src={imgPath} alt={imgAlt} />
        <h6 className="text-center text-xl mt-5 font-bold">{label}</h6>
      </div>
    </>
  );
}
