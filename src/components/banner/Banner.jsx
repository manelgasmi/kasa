import "./Banner.scss";

const Banner = ({ title, bgImage, hasShaddow }) => {
  
  return (
    <section
      className={"hero " + (hasShaddow ? "hero--shadow" : "")}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className={`banner-hover ${
          title ? "banner-hover-home" : "banner-hover-about"
        }`}
      >
        <h1 className="title">{title}</h1>
      </div>
    </section>
  );
};

export default Banner;
