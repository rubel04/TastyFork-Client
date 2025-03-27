import { Link } from "react-router-dom";
import bannerBg from "../../assets/banner.jpg"
import Button_Primary from "./Button_Primary";

const Banner = () => {
    return (
        <div className="relative w-full h-[500px] lg:h-[700px] bg-cover bg-center "
            style={{ backgroundImage: `url(${bannerBg})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                    Welcome to TastyFork
                </h1>
                <p className="text-lg md:text-2xl text-gray-300 my-4">
                Discover Delicious Food, Buy with Ease, and Savor Every Bite!
                </p>
                <Link to={'/all_foods'}>
                    <Button_Primary text="Purchase" type="lg"></Button_Primary>
                </Link>
            </div>
        </div>
    );
};

export default Banner;