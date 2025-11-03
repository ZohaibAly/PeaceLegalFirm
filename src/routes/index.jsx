import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/layout";

import HomePage from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        index: true,
        element: <HomePage />,
      },

 
    ],
  },
]);
