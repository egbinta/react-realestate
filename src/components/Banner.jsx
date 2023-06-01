import { Link } from "react-router-dom";

const Banner = ({ purpose, title, desc, buttonText, imgUrl }) => {
  return (
    <div
      className="bg-cover bg-center text-center relative"
      style={{
        backgroundImage: imgUrl,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "400px",
      }}
    >
      <div className="z-20 flex flex-col justify-center inline-block align-middle pt-10">
        <span className="font-medium font-bold text-4xl text-white pb-4">
          {purpose}
        </span>
        <span className="font-medium font-sm text-3xl text-white pb-3">
          {title}
        </span>
        <span className="font-medium font-md text-lg text-white pb-2">
          {desc}
        </span>
      </div>
      <Link to={"/search?purpose=for-rent"}>
        <button className="p-3 rounded-md bg-blue-600 text-white font-bold">
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default Banner;
