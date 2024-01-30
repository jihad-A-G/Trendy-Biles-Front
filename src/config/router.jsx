import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import CustomerSupportPage from "../Pages/CustomerSupportPage/CustomerSupportPage";
import ShippingPolicyPage from "../Pages/ShippingPolicyPage/ShippingPolicyPage";
import PriceMatchingPolicyPage from "../Pages/PriceMatchingPolicyPage/PriceMatchingPolicyPage";
import RegisterLogin from "../Pages/RegisterPage/RegisterPage";
import ContactUs from "../Pages/ContactUs/ContactUs";
import CategoryPage from "../Pages/CategoriesPage/Categories.jsx";
import AdminLayout from "../adminDashboard/dashboardLayout";
import axios from "axios";
import App from "../App";
import ProductsPage from "../adminDashboard/productsPage";
import AboutusPage from "../adminDashboard/aboutUsPage";
import NotFound from "../Pages/NotFoundPage/NotFound";
import OrdersTable from "../adminDashboard/orders/ordersTable";
import AboutUsPageMain from "../Pages/AboutUsPage/AboutUs.jsx";
import AdminLogin from "../Pages/AdminLogIn/AdminLogin.jsx"
const router = createBrowserRouter([
  //Application main layout
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: async () => {
          const response = await axios.get(
            "http://localhost:4000/api/products/"
          );
          return response.data;
        },
      },
      {
        path: "customer-support",
        element: <CustomerSupportPage />,
      },
      {
        path: "shipping-policy",
        element: <ShippingPolicyPage />,
      },
      {
        path: "price-matching-policy",
        element: <PriceMatchingPolicyPage />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/Category",
        element: <CategoryPage />,
      },
      {
        path: "/AboutUsMain",
        element: <AboutUsPageMain />,
        loader: async () => {
          const response = await axios.get(
            "http://localhost:4000/api/aboutus/content"
          );
          console.log(response.data.aboutusContent);
          return response.data.aboutusContent;
        },
      },
      {
        path: "/adminlogin",
        element: <AdminLogin />,
      },
    ],
  },
  //End of application main layout
  //Admin dashboard layout
  {
    path: "/admin-dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "products",
        element: <ProductsPage />,
        loader: async () => {
          const response = await axios.get(
            "http://localhost:4000/api/products/"
          );
          return response.data;
        },
      },
      {
        path: "aboutus",
        element: <AboutusPage />,
        loader: async () => {
          const response = await axios.get(
            "http://localhost:4000/api/aboutus/"
          );
          console.log(response.data);
          return response.data.aboutus;
        },
        action: async ({ request }) => {
          const formData = await request.formData();
          const data = Object.fromEntries(formData);
          console.log(data);

          const response = await axios.put(
            "http://localhost:4000/api/aboutus/",
            { ...data }
          );

          return response;
        },
      },
      {
        path: "orders",
        element: <OrdersTable />,
        // loader: async () =>{
        //   const response = await axios.get('http://localhost:4000/api/orders/')
        //   console.log(response.data);
        //   return response.data
        // }
      },
    ],
  },
  //End admin layout
  {
    path: "/register",
    element: <RegisterLogin />,
    action: async ({request}) => {
      const formData = await request.formData();
      const data = Object.fromEntries(formData);
      console.log(data);

      const response = await axios.post(
        "http://localhost:4000/api/users/", {...data}
      )
      return response;
    }
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
