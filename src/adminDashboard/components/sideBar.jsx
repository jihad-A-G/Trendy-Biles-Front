import { Nav } from 'react-bootstrap';

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
    <Nav.Link style={{hoverLinks}} href="/home">Published</Nav.Link>
    <Nav.Link style={{hoverLinks}} href="/home">Pending</Nav.Link>
    </div>
    <Nav.Link style={hoverLinks} eventKey="link-1">Orders</Nav.Link>
    <Nav.Link style={hoverLinks} eventKey="link-2">About us</Nav.Link>
    {/* Add more Nav.Link as needed */}
  </Nav>
  );
  };

export default AdminSideBar