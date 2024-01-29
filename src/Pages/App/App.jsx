import { useRoutes, BrowserRouter } from "react-router-dom";
import Context from "../../Context/Context";
import Home from "../Home/Home";
import MyAccount from "../MyAccount/MyAccount";
import MyOrder from "../MyOrder/MyOrder";
import MyOrders from "../MyOrders/MyOrders";
import SignIn from "../SignIn/SignIn";
import Error404 from "../Error404/Error404";
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu/CheckoutSideMenu";
import "../../App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <Error404 /> },
  ]);
  return routes;
};

export default function App() {
  return (
    <>
      <Context>
        <BrowserRouter>
          <AppRoutes />
          <Navbar />
          <CheckoutSideMenu />
        </BrowserRouter>
      </Context>
    </>
  );
}
