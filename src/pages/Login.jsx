import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import AuthContext from "../context/Authcontext";
import Input from "../components/shared/Input";
import loginImage from "../assets/login-img.jpeg"
import Button_Primary from "../components/shared/Button_Primary";
import Button_Secondary from "../components/shared/Button_Secondary";
const Login = () => {
  const { loginUser, loginUserWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
    loginUser(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            title: "You successfully login to TastyFork!",
            icon: "success",
            draggable: true,
          });
          form.reset();
          location.state ? navigate(location.state) : navigate("/");
        }
      })
      .catch((err) => {
        // console.log(err);
        Swal.fire({
          icon: "error",
          text: err.message,
        });
      });
  };

  const handleGoogleLogin = () => {
    loginUserWithGoogle()
      .then((result) => {
        // console.log(result);
        if (result.user) {
          Swal.fire({
            title: "You successfully sign up to TastyFork!",
            icon: "success",
            draggable: true,
          });
          location.state ? navigate(location.state) : navigate("/");
        }
      })
      .catch((err) => {
        // console.log(err.message);
        Swal.fire({
          icon: "error",
          text: err.message,
        });
      });
  };

  return (
    <div className="md:grid grid-cols-5 gap-6 w-11/12 md:w-2/3 mx-auto items-center my-4 lg:my-16">
      <div data-aos="fade-right" className={`col-span-2 rounded`}>
        
        <h2 className="text-4xl italic mb-8">
          Welcome back
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              label="Email"
            ></Input>
          </div>
          <div className="mt-4">
            <Input
            type="password"
            name="password"
            placeholder="********"
            label="Password"
          ></Input>
          </div>
          <div>
            <a className="link underline">Forgot password?</a>
          </div>
          <div className="block">
          <Button_Primary text="Login"></Button_Primary>
          </div>
          <p className="mt-4 text-center">
            Don't have an account? Please{" "}
            <Link
              className="text-green-600 font-bold hover:underline"
              to="/signUp"
            >
              Sign Up
            </Link>
          </p>
        </form>
        <div className="flex items-center my-4">
          <hr className="text-slate-300 h-[2px] w-full" />
          <p className="text-center mx-2">Or</p>
          <hr className="text-slate-300 h-[2px] w-full" />
        </div>
        <div className="text-center">
          <button
          onClick={handleGoogleLogin}
           className="w-full">
          <Button_Secondary text="Login with Google"></Button_Secondary>
          </button>
        </div>
      </div>
      <div data-aos="zoom-in" className="col-span-3">
        <img  className="h-full w-full" src={loginImage} alt="" />
      </div>
    </div>
  );
};

export default Login;
