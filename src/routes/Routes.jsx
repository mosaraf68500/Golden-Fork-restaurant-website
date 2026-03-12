import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
// import Main from "../../Layouts/Main";
import Main from "../../Layouts/Main"
import Menu from "../pages/Menu/Menu";
// import Home from "../../pages/Home/Home";



export  const router = createBrowserRouter([
  {
    path: "/",
  element:<Main></Main>,
  children:[
    {
        path:"/",
    element:<Home></Home>
    },
    {
      path:"menu",
      element:<Menu></Menu>
    }
  ]
  }
]);