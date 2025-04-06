import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "../components/shared/FoodCard";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://tasty-fork-server.vercel.app/foods?search=${search}`)
      .then((res) => {
        setFoods(res.data);
        setLoading(false);
      });
  }, [search]);

  return (
    <div className="max-w-11/12 mx-auto mb-12">
      <div className="md:flex md:items-center  md:justify-between my-4 md:my-12">
        <h2 className="text-4xl font-bold">All Foods</h2>
        <input
          onChange={(e) => setSearch(e.target.value)}
          name="search"
          placeholder="Search foods by name"
          className="p-3 border border-gray-400 placeholder:pl-2 my-2 rounded"
          type="text"
        />
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
    </div>
  );
};

export default AllFoods;
