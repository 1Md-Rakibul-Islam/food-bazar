import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useToken from "../../Hooks/useToken";
import { GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUser, loginProvider, setLoading } =
    useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  if (token) {
    navigate("/");
  }

  const handelSignUp = (data) => {
    // console.log(data);
    const imageHostKey = import.meta.env.VITE_imgbb_key;

    setSignUpError("");
    // create user
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        const image = data.photo[0];
        const formData = new FormData();
        formData.append("image", image);

        const url = `https://api.imgbb.com/1/upload?key=06ce6f925ad5f14c1f00b8790294f2a5`;
        // const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((imageData) => {
            if (imageData.status) {
              console.log(userInfo);
              const userInfo = {
                displayName: data.name,
                photoURL: imageData.data.url,
              };

              updateUser(userInfo)
                .then(() => {
                  // saveUser(data.option, data.name, data.email, imageData.data.url);
                })
                .catch((error) => console.log(error));
            }
          });
      })
      .catch((error) => {
        setSignUpError(error.message);
        console.log(error);
      });
  };

  // google login

  const handelGoogleLogin = () => {
    loginProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        // setBuyer(user.email);
        saveUser("employee", user?.displayName, user?.email, user?.photoURL);

        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // save profile on db
  const saveUser = (role, userName, email, userImage) => {
    const user = {
      role,
      userName,
      email,
      userImage,
      userCollection: [],
    };

    console.log("saveUser", user);

    fetch("https://nexusjobs.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("save user", data);
        setCreatedUserEmail(email);
        toast.success("User created Successfully");
        console.log(email);
      });
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center register">
      <div className="md:w-[720px] md:mx-auto mx-5 h-[520px] border rounded-lg shadow-2xl p-7">
        <h2 className="text-3xl my-5 text-center text-primary">Sign Up</h2>
        <form onSubmit={handleSubmit(handelSignUp)} calssName="">
          <div className="grid justify-center items-center gap-3 grid-cols-1 md:grid-cols-2">
            <div className="form-control">
              <label htmlFor="label">
                <span>Name</span>
              </label>
              <input
                {...register("name", {
                  required: true,
                })}
                className="input input-bordered"
              />
              {errors?.name && (
                <small className="text-error mt-2">
                  {errors.name?.message}
                </small>
              )}
            </div>
            <div className="form-control">
              <label htmlFor="label">
                <span>Photo</span>
              </label>
              <input
                {...register("photo", {
                  required: true,
                })}
                type="file"
                className="file-input file-input-bordered"
              />
              {errors?.email && (
                <small className="text-error mt-2">
                  {errors.email?.message}
                </small>
              )}
            </div>
            <div className="form-control">
              <label htmlFor="label">
                <span>Email</span>
              </label>
              <input
                {...register("email", {
                  required: "Email address is required",
                })}
                className="input input-bordered"
              />
              {errors?.email && (
                <small className="text-error mt-2">
                  {errors.email?.message}
                </small>
              )}
            </div>
            <div className="form-control">
              <label htmlFor="label">
                <span>Password</span>
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 charecters or longer",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])/,
                    message:
                      "Password must be strong minimum one A-Z character and one spical symbol",
                  },
                })}
                className="input input-bordered"
              />
              {errors.password && (
                <small className="text-error mt-2">
                  {errors.password?.message}
                </small>
              )}
            </div>
            <div>
              {signUpError && (
                <span className="my-2 text-error">{signUpError}</span>
              )}
            </div>
          </div>

          <div className="text-center">
            <input
              className="w-60 my-10 btn bg-primary px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-green-900 cursor-pointer focus:ring-green-900 hover:ring-green-900 text-white"
              type="submit"
              value="Sign Up"
            />
            <p>
              Alredy have an account?
              <Link className="text-secondary" to="/login">
                Plase Login
              </Link>
            </p>
          </div>
        </form>

        <div className="flex justify-center items-center mt-10">
          {" "}
          <button
            onClick={handelGoogleLogin}
            className="btn text-3xl p-2 rounded-full bg-black"
          >
            <FaGoogle className="text-green-600"></FaGoogle>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
