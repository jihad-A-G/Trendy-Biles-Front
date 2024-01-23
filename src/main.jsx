import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import App from './App.jsx';
// import router from './config/router.js';
// import { createBrowserRouter,RouterProvider } from 'react-router-dom';
// import axios from 'axios';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage/HomePage';

const router = createBrowserRouter([

  {
      path:"/",
      element:<HomePage/>,
      loader: async() =>{
          const response = await axios.get('http://localhost:4000/api/aboutus/content')
          console.log(response.data);

          return response.data
      }
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    <ToastContainer />
  </React.StrictMode>,
);
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import App from './App.jsx';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//     <ToastContainer />
//   </React.StrictMode>,
// );
