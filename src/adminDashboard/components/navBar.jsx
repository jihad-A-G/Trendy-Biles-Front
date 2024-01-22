import {Image, Navbar, Container } from 'react-bootstrap';
import logo from '../../assets/images/WhatsApp Image 2024-01-18 at 12.44.36 AM.jpeg'
import logoTitle from '../../assets/images/WhatsApp Image 2024-01-18 at 12.44.35 AM.jpeg'
import profile from '../../assets/images/user.png'
const AdminNavBar = () => (
  <Navbar bg="white" expand="lg" className='border-bottom'>
    <Container className='mx-1 p-0 w-100'>
      <Navbar.Brand href="#home"><Image className='d-none d-md-inline-block' src={logo} style={{ width: '65px', height: '65px' }}/> 
      <Image src={logoTitle} style={{ width: '150px' }}/> 
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
  <ul className="dropdown-menu p-0 " aria-labelledby="navbarDropdown" >
  <li className='border-bottom py-1'>
    <a className='link px-3 text-black d-block link-underline link-underline-opacity-0' href="">
      profile
    </a>
    </li>
    <li className='py-1' >
      <a href="" className='px-3 text-black d-block link-underline link-underline-opacity-0'>
      logout
      </a>
    </li>
  </ul>
</div>

     
    </Container>
  </Navbar>
);

export default AdminNavBar