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
  useEffect(() => {
    axiosSecure
      .get(`/my_foods?email=${email}`)
      .then((res) => setMyFoods(res.data));
  }, [axiosSecure, email]);

  const handleUpdateFood = (food) => {
    setSelectedFood(food);
    document.getElementById("my_modal_3").showModal();
  };

  //   const handleDeleteFood = (id) => {
  //     axios
  //       .delete(`http://localhost:5000/my_orders/${id}`)
  //       .then((res) => {
  //         console.log(res.data);
  //         if (res.data.deletedCount > 0) {
  //           const remainingFoods = myFoods.filter((food) => food._id !== id);
  //           setMyFoods(remainingFoods);
  //           Swal.fire({
  //             title: "Your order has been successfully removed from My Foods.",
  //             icon: "success",
  //             draggable: true,
  //           });
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

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
          {myFoods.map((food, index) => (
            <tr
              key={food._id}
              className="hover:bg-base-200 transition *:border *:border-gray-200 *:text-base"
            >
              <td className="font-medium">{index + 1}</td>
              <td>
                <img className="w-20 h-12" src={food?.image} alt="food-image" />
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

                <button
                  //   onClick={() => handleDeleteFood(food?._id)}
                  className="text-2xl cursor-pointer text-red-400"
                >
                  <RiDeleteBack2Line />
                </button>
              </td>
              <UpdateMyFood food={selectedFood}></UpdateMyFood>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyFoods;
