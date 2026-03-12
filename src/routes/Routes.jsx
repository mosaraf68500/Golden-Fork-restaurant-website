import { createBrowserRouter } from "react-router";
import Main from "../../Layouts/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import OurShop from "../pages/OurShop/OurShop";
import FoodDetails from "../components/ui/OurShop/FoodDetails";
import Payment from "../components/ui/OurShop/Payment";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "menu",
        element: <Menu></Menu>
      },
      {
    
        path: "ourshop",
        element: <OurShop></OurShop>
      },
      {
       
        path: "food-details/:id",
        element: <FoodDetails></FoodDetails>
      },

      {
    path: "payment",
    element: <Payment />
}
    ]
  }
]);