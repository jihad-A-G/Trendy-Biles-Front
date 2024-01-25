
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import CustomerSupportPage from "../Pages/CustomerSupportPage/CustomerSupportPage";
import ShippingPolicyPage from "../Pages/ShippingPolicyPage/ShippingPolicyPage";
import PriceMatchingPolicyPage from "../Pages/PriceMatchingPolicyPage/PriceMatchingPolicyPage";
import RegisterLogin from "../Pages/RegisterPage/RegisterPage";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AdminLayout from "../adminDashboard/dashboardLayout";
import axios from "axios";
import App from "../App";
import ProductsPage from "../adminDashboard/productsPage";
import AboutusPage from "../adminDashboard/aboutUsPage";

const router = createBrowserRouter([
//Application main layout
    {
        path:"/",
        element:<App/>,
      children:[{
        path:'/',
        element:<HomePage/>,
      
      },
    {
      path:'customer-support',
      element:<CustomerSupportPage/>
      
    },
    {
      path:'shipping-policy',
      element:<ShippingPolicyPage/>
    },
    {
      path:'price-matching-policy',
      element:<PriceMatchingPolicyPage/>
    }
    ,{
      path:'contact',
      element:<ContactUs/>
    }
  ]
    },
    //End of application main layout
    //Admin dashboard layout
    {
      path:'/admin-dashboard',
      element:<AdminLayout/>,
      children:[
        {
          path:'products',
          element:<ProductsPage/>
        },
        {
          path:'aboutus',
          element:<AboutusPage/>
        }
      ]
    },
    {
      path:'/register',
      element:<RegisterLogin/>
    }
])

export default router