import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/layout";
import HomePage from "../Pages/Home";
import OurLawyerPage from "../Pages/OurLawyer";
import ContactPage from "../Pages/GetFreeConsultation";
import CriminalLawPage from "../Pages/Services/CriminalLawPage";
import CompanyLawPage from "../Pages/Services/CompanyLawPage";
import CivilLawPage from '../Pages/Services/CivilLawPage';
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
        path: "Get-Free-Consultation",
        element: <ContactPage />,
      },
      {
        path: "Our-Lawyers",
        element: <OurLawyerPage />,
      },
      {
        path: "services/Criminal-Law",
        element: <CriminalLawPage />,
      },
       {
        path: "services/Company-Law",
        element: <CompanyLawPage />,
      },
      {
        path: "services/Civil-Law",
        element: <CivilLawPage />,
      },
    ],
  },
]);
