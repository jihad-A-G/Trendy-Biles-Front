import {Button, Container} from 'react-bootstrap'
import ProductCard from './components/productCard'
const ProductsPage = () =>{
    return(
        <>
        <Container className='d-flex justify-content-between align-items-center mb-3 p-2 border-bottom border-3'>
            <h3 className='text-black '>Products</h3>
            <div className="d-flex align-items-center column-gap-4">
                <div className="dropdown">
            <a
    className="nav-link dropdown-toggle"
    href="#"
    id="filterDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Filter
  </a>
  <ul className="dropdown-menu px-0 py-1 mt-2 " aria-labelledby="filterDropdown" >
  <li className='border-bottom'>
    <a className='py-1 link px-3 text-black d-block link-underline link-underline-opacity-0'>
      New
    </a>
    </li>
    <li className='border-bottom' >
      <a className='py-1 px-3 text-black d-block link-underline link-underline-opacity-0'>
      Accepted
      </a>
    </li>
    <li className='border-bottom' >
      <a className='py-1 px-3 text-black d-block link-underline link-underline-opacity-0'>
      Pending
      </a>
    </li>
    <li className='' >
      <a className='py-1 px-3 text-black d-block link-underline link-underline-opacity-0'>
      Rejected
      </a>
    </li>
  </ul>
  </div>
                <Button className='bg-danger border-0'><i className="bi bi-trash-fill"></i> Remove rejetced</Button>
            </div>
        </Container>
        <Container fluid className='d-flex justify-content-center flex-row flex-wrap column-gap-4 row-gap-4'>
            <ProductCard status={'new'}/>
            <ProductCard status={'accepted'}/>
            <ProductCard status={'pending'}/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>


        </Container>
        
        </>
    )

}

export default ProductsPage