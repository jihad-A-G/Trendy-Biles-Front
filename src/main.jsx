import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLayout from './adminDashboard/dashboardLayout.jsx';
// import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AdminLayout />
    {/* <App/> */}
    <ToastContainer />
  </React.StrictMode>,
);
