import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "./shared/FoodCard";
import { Link } from "react-router-dom";
import Button_Primary from "./shared/Button_Primary";

const TopFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://tasty-fork-server.vercel.app/foods?limit=6")
      .then((res) => {
        setFoods(res.data);
        setLoading(false);
      });
  }, []);
  return (
    <div className=" max-w-11/12 mx-auto">
      <div>
        <h2 className="text-4xl text-center font-bold my-12">Top Foods</h2>
      </div>
      <div>
        {loading ? (
          <div className="flex flex-col md:flex-row  gap-4">
            <div className="hidden md:block skeleton h-52 w-full"></div>
            <div className="hidden md:block skeleton h-52 w-full"></div>
            <div className="hidden md:block skeleton h-52 w-full"></div>
            <div className="skeleton h-52 w-full"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {foods.map((food) => (
              <FoodCard key={food._id} food={food}></FoodCard>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center mt-12">
        <Link to="/all_foods">
          <Button_Primary text="See All Foods"></Button_Primary>
        </Link>
      </div>
    </div>
  );
};

export default TopFoods;
