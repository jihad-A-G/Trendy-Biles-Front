import {Col,Row,Container} from 'react-bootstrap'
import AdminNavBar from './components/navBar';
import AdminSideBar from './components/sideBar';
const AdminLayout = () =>{
    return(
        <>
        <div>
            <Container fluid>
    <AdminNavBar />
    <Container fluid>
      <Row>
        <Col xs={2} id="sidebar-wrapper">
          <AdminSideBar />
        </Col>
        <Col xs={10} id="page-content-wrapper">
          <p className='text-black'>Hello there</p>
        </Col>
      </Row>
    </Container>
    </Container>
  </div>


        </>
    );
}

export default AdminLayout