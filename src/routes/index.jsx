import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/layout";
import HomePage from "../Pages/Home";
import OurLawyerPage from "../Pages/OurLawyer";
import ContactPage from "../Pages/Contact";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        index: true,
        element: <HomePage />,
      },
        {
        path: "Contact-us",
        element: <ContactPage />,
      },
        {
        path: "Our-Lawyers",
        element: <OurLawyerPage />,
      },

 
    ],
  },
]);
