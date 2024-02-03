  import React,{useState} from "react";
  import axios from "axios";
  import "./RegisterPage.css";
  import { useNavigate} from "react-router-dom";
  import FullLogo from "../../assets/FullLogo2.jpg";
  import { ToastContainer, toast } from "react-toastify";
  import { jwtDecode } from "jwt-decode";
  import { useInfo } from "../../utils/AuthContext";

  const RegisterLogin = () => {
    const navigate = useNavigate();
    const {setId} = useInfo();

    const [loginForm, setLoginForm] = useState({
      email:'',
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
          const response = await axios.post("http://localhost:4000/api/users/login", loginForm)
          console.log("hiiiiiiiiii")
          const token = response.data.token;
          console.log('hyy',token);
          const decoded = (jwtDecode(token));
          console.log('decoooooooodeeeeeed',decoded.id);
          setId(decoded.id);
          document.cookie = `token=${token}; path=/;`;
          navigate("/");
      }

      catch (err) {
        toast.error("Cannot login", err,{
          position: "top-right",
          autoClose: 3000,
        }
        );
      }
    }

    const handleSubmit= async (e) => {
      e.preventDefault();
      console.log("Form submitted with data:", form);

      try{
        const response = await axios.post("http://localhost:4000/api/users/", form)

      setForm({
        username:'',
        email:'',
        password:'',
        phoneNumber:'',
        address:''
      })
      toast.success("User Created Successfully", {
        position: "top-right",
        autoClose: 3000,
      });
    }
    catch (e) {
      toast.error("Enter Different Username or E-mail", e, {
        position: "top-right",
        autoClose: 3000,
      });
      console.log("error submitting form", e);
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

    const handleSignUpClick = () => {
      document.getElementById("container").classList.add("right-panel-active");
    };

    const handleSignInClick = () => {
      document.getElementById("container").classList.remove("right-panel-active");
    };

    const handleGoHomeClick = () => {
      navigate("/");
    };

    return (
      <>
        <button className="go-home" onClick={handleGoHomeClick}>
          Go Home
        </button>
        <div className="RegisterLoginPage">
          <div className="container" id="container">
            <div className="form-container sign-up-container">
              <form onSubmit={handleSubmit}>
                <h2>Create Account</h2>
                <span>or use your email for registration</span>
                <input
                  className="Registerinput"
                  type="text"
                  placeholder="Username"
                  name="username"
                  required
                  value={form.username}
                  onChange={handleInputChange}
                />
                <input
                  className="Registerinput"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  className="Registerinput"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={form.password}
                  onChange={handleInputChange}
                  required
                />
                <input
                  className="Registerinput"
                  type="text"
                  placeholder="PhoneNumber"
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
                <input
                  className="Registerinput"
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={form.address}
                  onChange={handleInputChange}
                  required
                />
                <button>Sign Up</button>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form onSubmit={handleLogin}>
                <h2>Sign in</h2>
                <span> use your account</span>
                <input
                  className="Registerinput"
                  type="text"
                  placeholder="Email"
                  name="email"
                  required
                  value={loginForm.email} 
                  onChange={handleInputChange}
                />
                <input
                  className="Registerinput"
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
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <img className="FullLogo" src={FullLogo} alt="Logo" />
                  <h2>Welcome Back!</h2>
                  <p>To keep connected with us please login with your personal info</p>
                  <button className="ghost" onClick={handleSignInClick}>
                    Sign In
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <img className="FullLogo" src={FullLogo} alt="Logo" />
                  <h2>Hello, Friend!</h2>
                  <p>Enter your personal details and start the journey with us</p>
                  <button className="ghost" onClick={handleSignUpClick}>
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default RegisterLogin;
