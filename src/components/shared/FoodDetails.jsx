import { Link, useLoaderData } from "react-router-dom";
import Button_Primary from "./Button_Primary";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

const FoodDetails = () => {

  const {theme} = useContext(ThemeContext);

  const food = useLoaderData();
  const {
    _id,
    food_name,
    image,
    price,
    food_quantity,
    country,
    description,
    category,
    purchaseCount
  } = food;
  return (
    <div className="w-11/12 mx-auto">
      <div className=" my-12">
        <h2 className="text-5xl font-medium mb-2">{food_name}</h2>
        <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} text-xl`}>{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          className="w-full border border-gray-200 rounded-2xl p-2"
          src={image}
          alt=""
        />
        <div className="*:grid *:grid-cols-3 md:w-2/3 space-y-4">
          <div>
            <p className="text-lg font-medium">Category:</p>
            <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} text-lg`}>{category}</p>
          </div>
          <div>
            <p className="text-lg font-medium">Quantity:</p>
            <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} text-lg`}>{food_quantity}</p>
          </div>
          <div>
            <p className="text-lg font-medium">Country:</p>
            <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} text-lg`}>{country}</p>
          </div>
          <div>
            <p className="text-lg font-medium">Purchase:</p>
            <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} text-lg`}>{purchaseCount}</p>
          </div>
          <div>
            <p className="text-lg font-medium">Price:</p>
            <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} text-lg`}>${price}</p>
          </div>
          <div>
            <Link to={`/purchase/${_id}`}>
              <Button_Primary text="Purchase"></Button_Primary>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
