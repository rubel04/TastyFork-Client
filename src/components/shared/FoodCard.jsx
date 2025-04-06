import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeProvider";
import AOS from "aos";
import { useEffect } from "react";

const FoodCard = (props) => {
  const { theme } = useContext(ThemeContext);
  const { food } = props || {};
  const {
    _id,
    food_name,
    image,
    price,
    food_quantity,
    country,
    description,
    purchaseCount,
  } = food;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
    data-aos="fade-up"
      className={`${
        theme === "dark" ? "text-gray-300" : "text-gray-600"
      } card border border-b-0 p-2 rounded-b-none border-gray-200 `}
    >
      <figure>
        <img
          className="w-full rounded-t-xl h-52 object-cover"
          src={image}
          alt="food-image"
        />
      </figure>
      <div className="p-0.5">
        <h2
          className={`${
            theme === "dark" ? "text-gray-200" : "text-black"
          } text-2xl font-medium mb-1`}
        >
          {food_name}
        </h2>
        <p className="mb-1">Quantity: {food_quantity}</p>
        <p className="mb-1">Country: {country}</p>
        <p className="mb-1">Price: {price}</p>
        <p className="mb-1">Purchase: {purchaseCount}</p>
        <p className="mb-2">{description.slice(0, 60)}...</p>
        <div className="card-actions">
          <Link
            to={`/food/${_id}`}
            className="btn btn-sm px-4 bg-sky-900 hover:bg-amber-500 text-white hover:text-black font-semibold text-base hover:underline underline-offset-2 decoration-1 decoration-black"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
