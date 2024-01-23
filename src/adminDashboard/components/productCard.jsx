import {Card,Button} from 'react-bootstrap'
import test from '../../assets/images/pexels-luis-quintero-3689532.jpg'
// eslint-disable-next-line react/prop-types
const ProductCard = ({status}) =>{
    return(
        <>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={test} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
            {
                status ==='new'?<div className="d-flex justify-content-center w-100"><Button className='bg-dark green-hover w-100 border-0'>Publish</Button></div> : status === 'accepted'?
                <div className="d-flex justify-content-between align-items-center">
                <Button variant="primary"><i className="bi bi-pencil-square"></i> Edit</Button>
                <Button variant="danger"><i className="bi bi-trash-fill"></i> Delete</Button></div> :status === 'pending'?
               <div className="d-flex justify-content-center w-100"><Button tabindex="-1" className='bg-danger w-100 border-0 pe-none'><i className="bi bi-x-lg"></i> Rejected</Button></div>:
               <div className="d-flex justify-content-center w-100"><Button tabindex="-1" className='bg-secondary w-100 border-0 pe-none'><i className="bi bi-clock-history"></i> Pending</Button></div>
}
        {/* <Button variant="primary"><i className="bi bi-pencil-square"></i> Edit</Button>
        <Button variant="danger"><i className="bi bi-trash-fill"></i> Delete</Button> */}
        

      </Card.Body>
    </Card>

        </>
    )

}

export default ProductCard