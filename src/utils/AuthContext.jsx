import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
 const [auth, setAuth] = useState(15124);

 useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
        console.log("the token in provider is ", token);
      const decodedId = jwtDecode(token);
      setAuth(decodedId);
    }
 }, []);

 return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
 );
};

export { AuthContext, AuthProvider };
