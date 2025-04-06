import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/Authcontext";
import { RiDeleteBack2Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import noData from "../assets/no-data.json"
import Lottie from "lottie-react";

const MyOrders = () => {
  const [myFoods, setMyFoods] = useState([]);
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const email = user?.email;
  useEffect(() => {
    axiosSecure.get(`/my_orders?email=${email}`).then((res) => {
      setMyFoods(res.data);
      setLoading(false);
    });
  }, [axiosSecure, email]);

  console.log(myFoods);

  const handleDeleteFood = (id) => {
    axios
      .delete(`https://tasty-fork-server.vercel.app/my_orders/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          const remainingFoods = myFoods.filter((food) => food._id !== id);
          setMyFoods(remainingFoods);
          Swal.fire({
            title: "Your order has been successfully removed from My Foods.",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {myFoods.length === 0 ? (
        <div className="h-[400px] flex items-center justify-center">
          <Lottie animationData={noData}></Lottie>
        </div>
      ) : (
        <div className="overflow-x-auto w-11/12 mx-auto my-8">
          <table className="table">
            <thead className="bg-amber-50">
              <tr className="*:text-base *:text-black">
                <th>No.</th>
                <th>Food Image</th>
                <th>Food Name</th>
                <th>Food Owner</th>
                <th>Price</th>
                <th>Buying Date</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan="6"
                    className="md:text-center py-10 text-xl text-amber-500"
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
                    <td>{food?.buyer?.email}</td>
                    <td>$ {food?.price}</td>
                    <td>{food?.date}</td>
                    <td className="text-center">
                      <button
                        onClick={() => handleDeleteFood(food?._id)}
                        className="text-2xl cursor-pointer text-red-400"
                      >
                        <RiDeleteBack2Line />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
