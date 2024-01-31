// AuthContext.jsx
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [info, setInfo] = useState({});
  const [auth, setAuth] = useState(null);
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
       const token = Cookies.get('token');
       if (token) {
         try {
           const decodedId = jwtDecode(token);
           setAuth(decodedId);
           setId(decodedId.id); // assuming the decoded token has an 'id' property
           if (decodedId.id !== id) { // Check if the id has changed
             setInfo({ id: decodedId.id }); // Update the info state here
           }
           setLoading(false);
         } catch (error) {
           console.error('Error decoding token:', error);
           setLoading(false);
         }
       } else {
         setLoading(false);
       }
       console.log('the updated id in the context', id);
    };
   
    fetchUserInfo();
   }, [setId]); // Empty dependency array to ensure this effect runs only once

  // useEffect(() => {
  // }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Replace this with your own loading component
  }

  return (
    <AuthContext.Provider value={{ info, setInfo,id }}>
      {children}
    </AuthContext.Provider>
  );
};

// Export useInfo, not info
const useInfo = () => {
  return React.useContext(AuthContext);
};

export { AuthContext, AuthProvider, useInfo };
