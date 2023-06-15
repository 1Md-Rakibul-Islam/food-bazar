import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn } = useContext(AuthContext);

  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    console.log(token);
    navigate(from, { replace: true });
  }

  const handelLogin = (data) => {
    // console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        toast.success("Login Successfully");
        setLoginUserEmail(data.email);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });

    console.log(errors);
  };

  return (
    <div className="h-[650px] min-h-screen flex justify-center items-center login ">
      <div className="border text-white rounded-lg w-80 md:w-96 shadow-2xl p-7">
        <h2 className="text-xl text-center text-primary">Login</h2>
        <form onSubmit={handleSubmit(handelLogin)}>
          <div className="form-control w-full mt-5">
            <div>
              <label for="name" className="block mb-1 ml-1">
                Name
              </label>
              <input
                {...register("email", {
                  required: "Email address is required",
                })}
                id="email"
                type="text"
                placeholder="Your Email"
                required=""
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-green-900 bg-black"
              />
            </div>

            {errors.email && (
              <small className="text-error mt-2">{errors.email?.message}</small>
            )}
          </div>
          <div className="form-control w-full mt-5">
            <label for="name" className="block mb-1 ml-1">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 charecters or longer",
                },
              })}
              id="email"
              type="password"
              placeholder="Your Password"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-green-900 bg-black"
            />
            {errors.password && (
              <small className="text-error mt-2">
                {errors.password?.message}
              </small>
            )}
          </div>
          <span>Forget Password?</span>
          <div>
            {loginError && (
              <span className="my-2 text-error">{loginError}</span>
            )}
          </div>
          <input
            className="w-full mt-5 btn bg-primary px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-green-900 cursor-pointer focus:ring-green-900 hover:ring-green-900 text-white"
            type="submit"
            value="Login"
          />
        </form>
        <p>
          New to Medi Care{" "}
          <Link className="text-secondary" to="/signup">
            Create a new account?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

<section className="p-6 text-black">
  <form
    novalidate=""
    className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-black ng-untouched ng-pristine ng-valid"
  >
    <h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>

    <div>
      <label for="message" className="block mb-1 ml-1">
        Message
      </label>
      <textarea
        id="message"
        type="text"
        placeholder="Message..."
        className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-green-900 bg-black"
      ></textarea>
    </div>
    <div>
      <button type="submit" className="">
        Send
      </button>
    </div>
  </form>
</section>;
