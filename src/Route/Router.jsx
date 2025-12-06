import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage.jsx/ErrorPage";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import MyProfile from "../Pages/MyProfile/MyProfile";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "../Contex/PrivateRoute";
import Loading from "../Pages/Loading/Loading";

const Router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/ServiceDetails.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "service",
        Component: Service,
        loader: () => fetch("/ServiceDetails.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/my-profile",
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
        
      },
      {
        path: "/service-details/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/ServiceDetails.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "log-in",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

export default Router;
