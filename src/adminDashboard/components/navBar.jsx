import {Image, Navbar, Container } from 'react-bootstrap';
import logo from '../../assets/FullLogo2.jpg'
import profile from '../../assets/images/user.png'
const AdminNavBar = () => (
  <Navbar bg="white" expand='lg' className='border-bottom px-2'>
    <Container className='' fluid>
      <Navbar.Brand href="#home"><Image className='d-none d-md-inline-block' src={logo} style={{ width: '65px', height: '65px' }}/>  
      </Navbar.Brand>
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
    <a className='py-1 link px-3 text-black d-block link-underline link-underline-opacity-0'>
      profile
    </a>
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
);

export default AdminNavBar