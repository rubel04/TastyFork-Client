import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Button_Primary from "./Button_Primary";
// import bannerBg from "../assets/banner.jpg"

const Banner = () => {
  const { pathname } = useLocation();
  return (
    <div
      className="w-full h-[400px] lg:h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url("https://i.ibb.co.com/DfJMF0p/Vegetable-Pasta.webp")`,
      }}
    >
      <div className="bg-black/50 h-full">
        <div className="text-white">
          {pathname === "/" && <Navbar></Navbar>}
        </div>
        <div className="h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-7xl font-bold text-white">
            Welcome to TastyFork
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mt-4">
            Discover Delicious Food, Buy with Ease, and Savor Every Bite!
          </p>
          <Link to={"/all_foods"}>
            <Button_Primary text="Purchase Now"></Button_Primary>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
