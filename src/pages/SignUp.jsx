
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import AuthContext from "../context/Authcontext";
import Input from "../components/shared/Input";
import signUpImage from "../assets/login-img.jpeg"
import Button_Primary from "../components/shared/Button_Primary";
import Button_Secondary from "../components/shared/Button_Secondary";

const SignUp = () => {
  const { createUser, updateUserProfile, loginUserWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const user = { name, email, photo, password };
    console.log(user);

    if (!/[A-Z]/.test(password)) {
      Swal.fire({
        icon: "error",
        text: "Must have an Uppercase letter in the password",
      });
      return;
    } else if (!/[a-z]/.test(password)) {
      Swal.fire({
        icon: "error",
        text: "Must have a Lowercase letter in the password",
      });
      return;
    } else if (password.length < 6) {
      Swal.fire({
        icon: "error",
        text: "Password must be at least 6 character",
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        // console.log(result);
        updateUserProfile({ displayName: name, photoURL: photo });
        if (result.user) {
          Swal.fire({
            title: "You successfully sign up to CineBuzz!",
            icon: "success",
            draggable: true,
          });
          form.reset();
          location.state ? navigate(location.state) : navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
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
    <div className="grid grid-cols-5 gap-6 w-2/3 mx-auto items-center lg:my-16">
      <div data-aos="fade-right" className="col-span-3">
        <img className="h-full w-full" src={signUpImage} alt="" />
      </div>
      <div data-aos="fade-left" className={`col-span-2 rounded`}>
        <h2 className="text-4xl italic mb-8">
          Welcome back
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              label="Name"
            ></Input>
            <Input
              type="text"
              name="photo"
              placeholder="Your Photo URL"
              label="Photo"
            ></Input>
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
          <div className="block">
          <Button_Primary text="Sign Up"></Button_Primary>
          </div>
          <p className="mt-4 text-center">
            Already have an account? Please{" "}
            <Link
              className="text-green-600 font-bold hover:underline"
              to="/login"
            >
              Login
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
    </div>
  );
};

export default SignUp;
