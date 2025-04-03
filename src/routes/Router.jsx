import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../components/shared/FoodDetails";
import PurchaseFood from "../pages/PurchaseFood";
import MyOrders from "../pages/MyOrders";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../pages/AddFood";
import MyFoods from "../pages/MyFoods";
import Gallery from "../pages/Gallery";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/signUp",
          element: <SignUp />
        },
        {
          path: "/all_foods",
          element: <AllFoods />
        },
        {
          path: "/gallery",
          element: <Gallery />
        },
        {
          path: "/add_foods",
          element: <AddFood />
        },
        {
          path: "/my_foods",
          element: <PrivateRoute><MyFoods /></PrivateRoute>
        },
        {
          path: "/food/:id",
          element: <FoodDetails />,
          loader: ({params}) => fetch(`http://localhost:5000/food/${params.id}`)
        },
        {
          path: "/purchase/:id",
          element: <PrivateRoute><PurchaseFood /></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/food/${params.id}`)
        },
        {
          path: "/my_orders",
          element: <PrivateRoute><MyOrders/></PrivateRoute>,
        }
      ]
    }
  ])

  export default router