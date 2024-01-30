import React,{useState} from "react";
import axios from "axios";
import "./AdminLogin.css";
import { useNavigate,} from "react-router-dom";
import FullLogo from "../../assets/FullLogo2.jpg";
// import jwtDecode from 'jwt-decode';
import { ToastContainer, toast } from "react-toastify";


const RegisterLogin = () => {
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    username:'',
    password:'',
});
  
  const [form, setForm] = useState({
    username:'',
    email:'',
    password:'',
    phoneNumber:'',
    address:''
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:4000/api/admins/login", loginForm)
        console.log("hiiiiiiiiii")
        const token = response.data.token;
        console.log('hyy',token);
        document.cookie = `token=${token}; path=/;`;
        navigate("/admin-dashboard")
    }

    catch (err) {
      toast.error("Cannot login", err,{
        position: "top-right",
        autoClose: 3000,
      }
      );
    }
  }



  const handleInputChange = (e) => {
    const {name, value } = e.target
    setForm({
      ...form,
      [name]:value,
    })

    setLoginForm({
      ...form,
      [name]:value,
    })
  }

 
  const handleGoHomeClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="LoginComponent">
        <form onSubmit={handleLogin}>
          <h2>Sign in</h2>
          <span>Use your account</span>
          <input
            className="LoginInput"
            type="text"
            placeholder="Username"
            name="username"
            required
            value={loginForm.username}
            onChange={handleInputChange}
          />
          <input
            className="LoginInput"
            type="password"
            placeholder="Password"
            name="password"
            required
            value={loginForm.password}
            onChange={handleInputChange}
          />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
    </>
  );
};

export default RegisterLogin;
