import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import DashboardDeFi from "pages/DashboardDeFi";
import Cover from "pages/Cover";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "dashboarddefi",
      element: <DashboardDeFi />,
    },
    {
      path: "cover",
      element: <Cover />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
