import { useContext } from "react";
import AuthContext from "../context/Authcontext";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/shared/Loader";

const PrivateRoute = (props) => {
  const { children } = props || {};
  const { user, loading } = useContext(AuthContext);
  const { pathname } = useLocation();
  if (loading) return <Loader />;
  if (user) return children;
  return <Navigate to="/login" state={pathname}></Navigate>;
};

export default PrivateRoute;
