import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "../components/shared/FoodCard";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/foods").then((res) => setFoods(res.data));
  }, []);
  return (
    <div className="max-w-11/12 mx-auto">
      <div className="md:flex md:items-center  md:justify-between my-4 md:my-12">
        <h2 className="text-4xl font-bold">All Foods</h2>
        <input
          name="search"
          placeholder="Search foods by name"
          className="p-3 border border-gray-400 placeholder:pl-2 my-2 rounded"
          type="text"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
