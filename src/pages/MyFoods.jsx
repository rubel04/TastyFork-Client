import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/Authcontext";
import { RiDeleteBack2Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import UpdateMyFood from "./UpdateMyFood";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyFoods = () => {
  const [myFoods, setMyFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState({});
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const email = user?.email;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosSecure.get(`/my_foods?email=${email}`).then((res) => {
      setMyFoods(res.data);
      setLoading(false);
    });
  }, [axiosSecure, email]);

  const handleUpdateFood = (food) => {
    setSelectedFood(food);
    document.getElementById("my_modal_3").showModal();
  };

  return (
    <div className="overflow-x-auto w-11/12 mx-auto my-8">
      <table className="table">
        <thead className="bg-green-100">
          <tr className="*:text-base *:text-black">
            <th>No.</th>
            <th>Food Image</th>
            <th>Food Name</th>
            <th>Food Category</th>
            <th>Price</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td
                colSpan="6"
                className="text-center py-10 text-xl text-amber-500"
              >
                Loading...
              </td>
            </tr>
          ) : (
            myFoods.map((food, index) => (
              <tr
                key={food._id}
                className="hover:bg-base-200 transition *:border *:border-gray-200 *:text-base"
              >
                <td className="font-medium">{index + 1}</td>
                <td>
                  <img
                    className="w-20 h-12"
                    src={food?.image}
                    alt="food-image"
                  />
                </td>
                <td>{food?.food_name}</td>
                <td>{food?.category}</td>
                <td>$ {food?.price}</td>
                <td className="text-center">
                  <button
                    onClick={() => handleUpdateFood(food)}
                    className="text-2xl cursor-pointer text-sky-900 md:mr-4"
                  >
                    <BiEditAlt />
                  </button>
                </td>
                <UpdateMyFood
                  food={selectedFood}
                  setMyFoods={setMyFoods}
                ></UpdateMyFood>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyFoods;
