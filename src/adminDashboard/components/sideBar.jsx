import { Nav } from 'react-bootstrap';

const AdminSideBar = () => (
  <Nav defaultActiveKey="/home" className="flex-column">
    <Nav.Link href="/home">Active</Nav.Link>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
    {/* Add more Nav.Link as needed */}
  </Nav>
);

export default AdminSideBar