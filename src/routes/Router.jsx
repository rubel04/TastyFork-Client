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
          path: "/food/:id",
          element: <PrivateRoute><FoodDetails /></PrivateRoute>,
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