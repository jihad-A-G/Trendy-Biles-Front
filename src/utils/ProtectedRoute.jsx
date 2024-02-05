import React, { useEffect,useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export const SuperAdminProtectedRoute = ({ children }) => {
  const { auth,role } = useContext(AuthContext);
    console.log("the auth in the protected" , auth)
    console.log("the role in the protected" , role)
     if (!auth || role != 'Super-Admin' ) {
      return <Navigate to="/not-found" replace />;
    }
  
 return children;
};




export const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);
    console.log("the auth in the protected" , auth)

     if (!auth) {
      return <Navigate to="/not-found" replace />;
    }
  
 return children;
};

