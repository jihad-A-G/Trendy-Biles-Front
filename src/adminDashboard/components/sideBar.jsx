import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AdminSideBar = () => {
  const hoverLinks = {
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'gray',
      color:'white'
    },
 };

  return(
  <Nav defaultActiveKey="/home" className="flex-column">
     {/* <Nav.Link>Products</Nav.Link> */}
    <Nav.Link style={{hoverLinks}} data-bs-toggle="collapse" href="#productCollapse" role="button">Products</Nav.Link>
    <div className="collapse" id='productCollapse'>
    <NavLink className='nav-link' style={{hoverLinks}} to='products'>Published</NavLink>
    <NavLink className='nav-link' style={{hoverLinks}} to="products">Pending</NavLink>
    </div>
    <NavLink className={'nav-link'} style={hoverLinks} to={'orders'}>Orders</NavLink>
    <NavLink className={'nav-link'} to={'/admin-dashboard/aboutus'} style={hoverLinks}>About us</NavLink>
    {/* Add more Nav.Link as needed */}
  </Nav>
  );
  };

export default AdminSideBar