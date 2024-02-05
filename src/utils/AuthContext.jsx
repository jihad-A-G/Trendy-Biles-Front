// AuthContext.jsx
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [info, setInfo] = useState({});
  const [role,setRole] = useState(null);
  const [auth, setAuth] = useState(null);
  const [id, setId] = useState();
  const [userlogin, setUserLogin] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const storedToken = localStorage.getItem('token'); // Use localStorage or sessionStorage
      if (storedToken) {
        try {
          const decodedId = jwtDecode(storedToken);
          console.log(decodedId);
          setId(decodedId.id);
          console.log(decodedId.id);
          setAuth(true);
          setUserLogin(true);
          setRole(decodedId.roles.name);
          if (decodedId.id !== id) {
            setInfo({ id: decodedId.id });
          }
          setLoading(false);
        } catch (error) {
          console.error('Error decoding token:', error);
          // Clear user information if token is invalid or expired
          // setAuth(false);
          // setId(null);
          // setRole(null);
          // setInfo({});
          // setLoading(false);
        }
      } 
    };
  
    fetchUserInfo();
  }, [setAuth, setId, setUserLogin, setRole,setInfo]);
  
  console.log(id);


  useEffect(() => {
    console.log('the updated id in the context', id);
    console.log('the updated auth in the context', auth);
    console.log('the updated role in the context', role);
    console.log('the updated login in the context', userlogin);
    console.log("the cart items now are", cartItems);


  }, [id,auth,role,userlogin,info,cartItems]);

  // if (loading) {
  //   return <div>Loading...</div>; 
  // }

  return (
    <AuthContext.Provider value={{ auth, setAuth, info, setInfo, id, setId,role,setRole,userlogin,setUserLogin,cartItems,setCartItems}}>
      {children}
    </AuthContext.Provider>
  );
};

// Export useInfo, not info
const useInfo = () => {
  return React.useContext(AuthContext);
};

export { AuthContext, AuthProvider, useInfo };
