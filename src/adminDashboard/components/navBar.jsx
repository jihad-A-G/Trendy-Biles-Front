import {Image, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/FullLogo2.jpg'
import profile from '../../assets/images/user.png'
import { useState,useEffect } from 'react';
import axios from 'axios';
const AdminNavBar = () => {
  const [aboutus,setAboutus] = useState({})

  const handleNavbarData = async() =>{
    const response = await axios.get('http://localhost:4000/api/aboutus/info')
    setAboutus(response.data.aboutus)    
  }
  useEffect(()=>{
    handleNavbarData()
  },[])
  return(

  <Navbar bg="white" expand='lg' className='border-bottom px-2'>
    <Container className='' fluid>
      {aboutus?<Navbar.Brand href="#home"><Image className='d-none d-md-inline-block' src={`http://localhost:4000/${aboutus.logoImage}`} style={{  height: '80px' }}/>  
      </Navbar.Brand>:<div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>}
      <div className="nav-item dropdown">
  <a
    className="nav-link dropdown-toggle"
    href="#"
    id="navbarDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <img
      src={profile}
      alt="user"
      className="profile-pic me-2"
    />
    Jihad AG
  </a>
  <ul className="dropdown-menu px-0 py-1 mt-2 " aria-labelledby="navbarDropdown" >
  <li className='border-bottom'>
    <Link className='py-1 link px-3 text-black d-block link-underline link-underline-opacity-0' to={`/admin-dashboard/profile`}>
      profile
    </Link>
    </li>
    <li className='' >
      <a className='py-1 px-3 text-black d-block link-underline link-underline-opacity-0'>
      logout
      </a>
    </li>
  </ul>
</div>

     
    </Container>
  </Navbar>
)};

export default AdminNavBar