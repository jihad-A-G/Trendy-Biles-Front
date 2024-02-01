import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import CustomerSupportPage from "../Pages/CustomerSupportPage/CustomerSupportPage";
import ShippingPolicyPage from "../Pages/ShippingPolicyPage/ShippingPolicyPage";
import PriceMatchingPolicyPage from "../Pages/PriceMatchingPolicyPage/PriceMatchingPolicyPage";
import RegisterLogin from "../Pages/RegisterPage/RegisterPage";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AboutUsPageMain from "../Pages/AboutUsPage/AboutUs.jsx";
import CategoryPage from "../Pages/CategoriesPage/Categories.jsx";
import AdminLayout from "../adminDashboard/dashboardLayout";
import axios from "axios";
import App from "../App";
import ProductsPage from "../adminDashboard/products/productsPage.jsx";
import AboutusPage from "../adminDashboard/aboutUsPage";
import NotFound from "../Pages/NotFoundPage/NotFound";
import OrdersTable from "../adminDashboard/orders/ordersTable";
import Cookies from "js-cookie";
import Categories from "../adminDashboard/category/categoriesPage";
import AddCategory from "../adminDashboard/category/categoryAddForm";
import EditCategory from "../adminDashboard/category/categoryEditForm";
// import AnyCategoryPage from "../Components/ProductPageComponent/ProductPageComponent.jsx";
import AdminLogin from "../Pages/AdminLogIn/AdminLogin.jsx"
import ProfilePage from "../adminDashboard/profilePage.jsx";
import AddProduct from '../adminDashboard/products/addProduct.jsx'
import EditProduct from "../adminDashboard/products/editProduct.jsx";

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
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "Category",
        element: <CategoryPage />,
        loader:async() =>{
          const response = await axios.get('http://localhost:4000/api/categories/')
          console.log(response.data);
          return response.data
        },
      },
      {
        path: "/adminlogin",
        element: <AdminLogin />,
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
      // {
      //   path: "/phones",
      //   element: <AnyCategoryPage productPage={"Phones"} />,
      // },
      // {
      //   path: "/laptops",
      //   element: <AnyCategoryPage productPage={"Laptops"} />,
      // },
      // {
      //   path: "/pc",
      //   element: <AnyCategoryPage productPage={"PC"} />,
      // },
      // {
      //   path: "/accessories",
      //   element: <AnyCategoryPage productPage={"Accessories"} />,
      // },
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
        action:async({request}) =>{
          const formData = await request.formData()
          const data = Object.fromEntries(formData)
          const response = await axios.delete(`http://localhost:4000/api/products/${data.id}`)
          console.log(response);
          return redirect('/admin-dashboard/products')
        }
      },
      {
        path:'products/add-product',
        element:<AddProduct/>,
        loader: async() =>{
          const categoriesData = await axios.get('http://localhost:4000/api/categories')
          const categories = categoriesData.data

          const brandsData = await axios.get('http://localhost:4000/api/brands')
          const brands = brandsData.data

          const detailsData = await axios.get('http://localhost:4000/api/productDetails')
          const details = detailsData.data

          return {categories, details, brands}
        },
        action: async({request}) =>{
          const formData = await request.formData()
          const data = Object.fromEntries(formData)
          const parsedData = JSON.parse(data.formData)
          const dataToSubmit = {productName:data.productName,description:data.description,brand:data.brand,categories:parsedData.categories,details:parsedData.details}
          console.log(dataToSubmit);
          const response = await axios.post('http://localhost:4000/api/products',{...dataToSubmit})
          console.log(response.data);

          return redirect('/admin-dashboard/products')
          // return null
        
        }

      },
      {
        path:'products/edit-product/:id',
        element:<EditProduct/>,
        loader: async({params}) =>{
          const categoriesData = await axios.get('http://localhost:4000/api/categories')
          const categories = categoriesData.data

          const brandsData = await axios.get('http://localhost:4000/api/brands')
          const brands = brandsData.data

          const detailsData = await axios.get('http://localhost:4000/api/productDetails')
          const details = detailsData.data

          const response = await axios.get(`http://localhost:4000/api/products/${params.id}`)
          const data = response.data

          return {data,categories,details,brands}

        },
        action : async ({params,request}) =>{
          const formData = await request.formData()
          const data = Object.fromEntries(formData)

          // console.log(data);
          const parsedData = JSON.parse(data.formData)
          const dataToSubmit = {productName:data.productName,description:data.description,brand:data.brand,categories:parsedData.categories,details:parsedData.details}
          // console.log(dataToSubmit);


          const response = await axios.patch(`http://localhost:4000/api/products/${params.id}`,{...dataToSubmit})
          console.table(response);

          return redirect('/admin-dashboard/products')
        }

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
            { ...data },
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          return redirect("/admin-dashboard/aboutus");
        },
      },
      {
        path: "orders",
        element: <OrdersTable />,
        loader: async () => {
          const response = await axios.get(
            "http://localhost:4000/api/orders/",
            {
              headers: {
                // cookies:{
                //   token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTkzYWQyYTYyYTZmMWZlOGU0N2VhOCIsIm5hbWUiOiJhaG1hZCIsInJvbGVzIjoiNjVhNjg3Yjg4ZDU3MzRiMTEyNTNlYTYwIiwiaWF0IjoxNzA2MjU4NzYyLCJleHAiOjE3MDYzNDUxNjJ9.aVg0IYCvX45eK_b3mZ3JbqGO8V3izH_uXuFXbViRhJg'
                // },
              },
            }
          );
          console.log(response.data);
          return response.data;
        },
      },
      {
        path: "categories",
        element: <Categories />,
        loader: async () => {
          const response = await axios.get(
            "http://localhost:4000/api/categories/"
          );
          console.log(response.data);
          return response.data;
        },
      },
      {
        path: "categories/add-category",
        element: <AddCategory />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const data = Object.fromEntries(formData);

          const response = await axios.post(
            "http://localhost:4000/api/categories/",
            { ...data },
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log(response);
          return redirect("/admin-dashboard/categories");
        },
      },
      {
        path: "categories/:id/delete",
        action: async ({ params }) => {
          const response = await axios.delete(
            `http://localhost:4000/api/categories/${params.id}`
          );
          console.log(response);
          return redirect("/admin-dashboard/categories");
        },
      },
      {
        path: "categories/:id/edit-category",
        element: <EditCategory />,
        loader: async ({ params }) => {
          const response = await axios.get(
            `http://localhost:4000/api/categories/${params.id}`
          );
          console.log(response);
          return response.data;
        },
        action: async ({ request, params }) => {
          const formData = await request.formData();
          const data = Object.fromEntries(formData);

          const response = await axios.put(
            `http://localhost:4000/api/categories/${params.id}`,
            { ...data },
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log(response);

            return redirect('/admin-dashboard/categories')

          }
        },
        {
          path:'profile',
          element:<ProfilePage/>,
          // loader:async({params}) =>{
          //   const response = await axios.get(`http://localhost:4000/api/admins/${params.id}`)
          //   console.log(response.data);
          //   return response.data
          // }
        }
      ]
    },
    //End admin layout 
    {
      path:'/register',
      element:<RegisterLogin/>
    },
    {
      path:'*',
      element:<NotFound/>
    }
])

export default router;
