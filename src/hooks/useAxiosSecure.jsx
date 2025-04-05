import axios from "axios";
import { useContext, useEffect } from "react";
import AuthContext from "../context/Authcontext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (err) => {
        // console.log("user caught",err);
        if (err.status === 401 || err.status === 403) {
          console.log("need to logout");
          logOutUser()
            .then(() => {
              Swal.fire({
                text: `${err.status === 401 && "Unauthorized access!" || err.status === 403 && "Forbidden access!"} Please login first`,
                icon: "success",
                draggable: true,
              });
              navigate("/login");
            })
            .catch((error) => {
              Swal.fire({
                title: error.message,
                icon: "success",
                draggable: true,
              });
            });
        }
        return Promise.reject(err);
      }
    );
  }, [logOutUser, navigate]);

  return axiosInstance;
};

export default useAxiosSecure;
