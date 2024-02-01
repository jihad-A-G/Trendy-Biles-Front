import React, { useEffect,useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
const ProtectedRoute = ({ children }) => {
    const auth = useContext(AuthContext);
    console.log("the auth in the protected" , auth)

     if (!auth) {
      return <Navigate to="/not-found" replace />;
    }
  
 return children;
};

export default ProtectedRoute;
