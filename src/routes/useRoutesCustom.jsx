import React from "react";
import { useRoutes } from "react-router-dom";
import HomeTemplate from "../template/HomeTemplate";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import DemoState from "../pages/DemoState";
import Profile from "../pages/Profile";
import DemoUseEffect from "../pages/DemoUseEffect";
import ShoeDetail from "../pages/ShoeDetail";
import DemoReduxToolkit from "../pages/DemoReduxToolkit";
import Fakebook from "../pages/Fakebook";

const useRoutesCustom = () => {
  const myRoutes = useRoutes([
    {
      path: "",
      element: <HomeTemplate />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "demo-use-state",
          element: <DemoState />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "demo-use-effect",
          element: <DemoUseEffect />,
        },
        {
          path: "shoe-detail/:id",
          element: <ShoeDetail />,
        },
        {
          path: "demo-redux-toolkit",
          element: <DemoReduxToolkit />,
        },
        {
          path: "fakebook",
          element: <Fakebook />,
        },

        //trường hợp path không tồn tại thì vào path:"*"
        {
          path: "*",
          element: <Home />,
        },
        // định nghĩa 6 route con còn lại của element HomeTemplate
      ],
    },
  ]);
  return myRoutes;
};

export default useRoutesCustom;
