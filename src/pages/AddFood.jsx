import { useContext } from "react";
import Input from "../components/shared/Input";
import AuthContext from "../context/Authcontext";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddFood = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { owner_name, owner_email, ...foodData } = initialData;
    foodData.buyer = { name: owner_name, email: owner_email };
    foodData.purchaseCount = 0;

    console.log(foodData);

    axios.put('http://localhost:5000/update')
    .then(res => console.log(res.data))

    axios
      .post(`http://localhost:5000/add_food?email=${user?.email}`, foodData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Food added successfully.",
            text: "Your dish is now available for others to see.",
            icon: "success",
            draggable: true,
          });
          navigate("/my_foods");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://i.ibb.co.com/DfJMF0p/Vegetable-Pasta.webp")`,
      }}
      className="bg-center bg-cover bg-no-repeat py-4 md:py-8"
    >
      <form
        onSubmit={handleAddFood}
        className="w-11/12 max-w-xl mx-auto p-6 rounded bg-white/80 backdrop-blur-sm"
      >
        <h2 className="text-2xl font-medium mb-4">Add a New Delicious Food</h2>
        <Input
          label="Food Name"
          type="text"
          name="food_name"
          placeholder="Food Name"
        ></Input>
        <Input
          label="Image"
          type="text"
          name="image"
          placeholder="Image URl"
        ></Input>
        <Input
          label="Category"
          type="text"
          name="category"
          placeholder="Category"
        ></Input>
        <Input
          label="Quantity"
          type="text"
          name="food_quantity"
          placeholder="Quantity"
        ></Input>
        <Input
          label="Price"
          type="text"
          name="price"
          placeholder="Price"
        ></Input>
        <Input
          label="Country"
          type="text"
          name="country"
          placeholder="Country"
        ></Input>
        <Input
          label="Owner Name"
          type="text"
          name="owner_name"
          readOnly={true}
          defaultValue={user?.displayName}
          placeholder="Name"
        ></Input>
        <Input
          label="Owner Email"
          type="email"
          readOnly={true}
          defaultValue={user?.email}
          name="owner_email"
          placeholder="Email"
        ></Input>
        <div>
          <label className="text-sm">Description*</label>
          <textarea
            className="w-full bg-gray-100 p-3 border border-gray-200 placeholder:text-[13px] placeholder:pl-2 my-2 rounded"
            name="description"
            placeholder="Type ingredients, making procedure, etc"
            id=""
          ></textarea>
        </div>
        <button
          className={`text-xl text-center font-medium text-white py-3 px-6 w-full cursor-pointer my-2 rounded bg-green-600 hover:bg-green-700 transition`}
        >
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFood;
