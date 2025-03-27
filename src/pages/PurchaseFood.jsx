import { useLoaderData, useNavigate } from "react-router-dom";
import Input from "../components/shared/Input";
import { useContext } from "react";
import AuthContext from "../context/Authcontext";
import moment from "moment/moment";
import axios from "axios";
import Swal from "sweetalert2";

const PurchaseFood = () => {
  const { user } = useContext(AuthContext);
  const food = useLoaderData();
  const navigate = useNavigate();
  const { _id, food_name, image, price, food_quantity, buyer } = food;

  const handlePurchaseFood = (e) => {
    e.preventDefault()
    const date = moment().format("MMMM Do YYYY, h:mm:ss a");
    const purchaseFood = {
      food_id: _id,
      food_name,
      image,
      price,
      food_quantity,
      date,
      buyer,
      user_email: user?.email,
    };

    axios.post('http://localhost:5000/orders', purchaseFood)
    .then(res => {
        if (res.data.insertedId) {
            Swal.fire({
              title: "Your order has been placed successfully!",
              icon: "success",
              draggable: true,
            });
            navigate("/my_orders")
            // location.state ? navigate(location.state) : navigate("/");
          }
    })
    .catch(err => {
        Swal.fire({
            title: err.message,
            icon: "success",
            draggable: true,
          });
    })

  };

  return (
    <div
      className="bg-cover bg-center w-full h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <form onSubmit={handlePurchaseFood} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-1/2 mx-auto bg-white/50 backdrop-blur-md px-10 py-20 rounded">
        <Input
          type="text"
          label="Food Name"
          disabled={true}
          defaultValue={food_name}
        ></Input>
        <Input
          type="text"
          label="Food Image"
          disabled={true}
          defaultValue={image}
        ></Input>
        <Input
          type="text"
          label="Quantity"
          disabled={true}
          defaultValue={food_quantity}
        ></Input>
        <Input
          type="text"
          label="Price"
          disabled={true}
          defaultValue={price}
        ></Input>
        <Input
          type="text"
          label="Buyer Name"
          disabled={true}
          defaultValue={buyer?.name}
        ></Input>
        <Input
          type="email"
          label="Buyer Email"
          disabled={true}
          defaultValue={buyer?.email}
        ></Input>
        <button
          className={`col-span-2 text-xl text-center font-medium text-white py-3 px-6 cursor-pointer my-2 rounded bg-green-600 hover:bg-green-700 transition`}
        >
          Purchase
        </button>
      </form>
    </div>
  );
};

export default PurchaseFood;
