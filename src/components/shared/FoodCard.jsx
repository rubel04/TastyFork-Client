import { Link } from "react-router-dom";

const FoodCard = (props) => {
  const { food } = props || {};
  const { _id, food_name, image, price, food_quantity, country, description } =
    food;
  return (
    <div className="card bg-base-10 border border-b-0 p-2 rounded-b-none border-gray-200">
      <figure>
        <img
          className="w-full rounded-t-xl h-52 object-cover"
          src={image}
          alt="food-image"
        />
      </figure>
      <div className="p-0.5">
        <h2 className="text-2xl font-medium mb-2">{food_name}</h2>
        <p className="text-gray-700 mb-1">Quantity: {food_quantity}</p>
        <p className="text-gray-700 mb-1">Country: {country}</p>
        <p className="text-gray-700 mb-1">Price: {price}</p>
        <p className="text-gray-700 mb-2">{description.slice(0, 60)}...</p>
        <div className="card-actions">
          <Link
            to={`/food/${_id}`}
            className="btn btn-sm px-4 bg-[#403F3F] hover:bg-green-600 text-white hover:text-black font-semibold text-base hover:underline underline-offset-2 decoration-1 decoration-black"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
