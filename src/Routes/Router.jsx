import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Homes/Home/Home";
import About_Us from "../Pages/About_Us/About_Us";
import Projects from "../Pages/Projets/Projects";
import Contact from "../Pages/Contact/Contact";
import Services from "../Pages/Services/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { 
        path: "/about_Us",
        element: <About_Us />
      },
      {
        path: "/services",
        element: <Services/>
      },
      {
        path:"/projects",
        element:<Projects/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }

    ],
  },
]);
