import {Form,Button} from 'react-bootstrap'

const AboutusPage = () =>{

    return(
        <Form>
      <Form.Group className="mb-3" controlId="companyName">
        <Form.Label>Company name</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="CompanyLogo">
        <Form.Label>Company Logo</Form.Label>
        <Form.Control type="file" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="companyAbout">
        <Form.Label>About us</Form.Label>
        <Form.Control as="textarea" rows={7} />
      </Form.Group>
      <Button type='submit' className='green-btn'>Edit</Button>
    </Form>
    )
}

export default AboutusPage

