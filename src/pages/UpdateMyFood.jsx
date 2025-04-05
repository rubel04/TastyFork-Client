import { useContext} from "react";
import AuthContext from "../context/Authcontext";
import Input from "../components/shared/Input";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateMyFood = (props) => {
  const { food } = props || {};
//   console.log(food);
  const { user } = useContext(AuthContext);

  const handleUpdateFood = (e, foodId) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updateFoodData = Object.fromEntries(formData.entries());
    axios.patch(`https://tasty-fork-server.vercel.app/update_food/${foodId}`, updateFoodData)
    .then((res) => {
        console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: "Food updated successfully.",
          icon: "success",
          draggable: true,
        });
        document.getElementById("my_modal_3").close();
      }
    })
    .catch(err =>{
        console.log(err);
    })
    console.log(foodId);
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-circle absolute right-2 top-2 text-red-400 bg-gray-50">
              ✕
            </button>
          </form>
          <h2 className="text-2xl font-medium mb-4">
            Update Your Food Details
          </h2>
          <form
            onSubmit={(e) => handleUpdateFood(e, food?._id)}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <Input
              label="Food Name"
              type="text"
              name="food_name"
              defaultValue={food?.food_name}
            ></Input>
            <Input
              label="Image"
              type="text"
              name="image"
              defaultValue={food?.image}
            ></Input>
            <Input
              label="Category"
              type="text"
              name="category"
              defaultValue={food?.category}
            ></Input>
            <Input
              label="Quantity"
              type="text"
              name="food_quantity"
              defaultValue={food?.food_quantity}
            ></Input>
            <Input
              label="Price"
              type="text"
              name="price"
              defaultValue={food?.price}
            ></Input>
            <Input
              label="Country"
              type="text"
              name="country"
              defaultValue={food?.country}
            ></Input>
            <Input
              label="Owner Name"
              type="text"
              name="owner_name"
              readOnly={true}
              defaultValue={user?.displayName}
            ></Input>
            <Input
              label="Owner Email"
              type="email"
              readOnly={true}
              defaultValue={user?.email}
              name="owner_email"
            ></Input>
            <div className="col-span-2">
              <label className="text-sm">Description*</label>
              <textarea
                className="w-full bg-gray-100 p-3 border border-gray-200 placeholder:text-[13px] placeholder:pl-2 my-2 rounded"
                defaultValue={food?.description}
                name="description"
                id=""
              ></textarea>
            </div>
            <button
              className={`col-span-2 text-xl text-center font-medium text-white py-3 px-6 w-full cursor-pointer my-2 rounded bg-green-600 hover:bg-green-700 transition`}
            >
              Update Food
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateMyFood;
