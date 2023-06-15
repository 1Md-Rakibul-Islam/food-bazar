import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";
import Page404 from "../../Pages/Shared/404/Page404";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Products from "../../Pages/Products/Products";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <PrivateRoute><Products></Products></PrivateRoute>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "*",
        element: <Page404></Page404>,
      },
    ],
  },
]);