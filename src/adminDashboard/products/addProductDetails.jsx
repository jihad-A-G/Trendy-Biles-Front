import { Container } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { Link,useLoaderData,Form,useSubmit } from "react-router-dom"
import { useState } from "react"
const AddProductDetails = () =>{
    const submit = useSubmit()

    return(
    <>
    <div className="container">
    <Link style={{textDecoration:'none'}} className="text-black mb-2"><i class="bi bi-arrow-left"> Back</i></Link>
    <Container className='d-flex align-items-center mb-5 p-1 border-bottom border-3'>
            <h3 className='text-black '>Add product details</h3>
        </Container>
  <div className="row">
    <div className="col-md-8 order-md-1">
      <Form className="needs-validation" method="POST">
        <div className="row">
          <div className="col-md-12 mb-3">
            <label htmlFor="specificName">specific product name</label>
            <input
              type="text"
              className="form-control"
              id="specificName"
              name="specificName"
              placeholder=""
              defaultValue=""
              required=""
            />
          </div>
        </div>
      <hr className="mb-4" />

        <h4>Price</h4>
            <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="price">price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
            />
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="cost">cost</label>
            <input
              type="number"
              className="form-control"
              id="cost"
              name="cost"
              placeholder=""
              defaultValue=""
              required=""
              rows={7}
            />
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="quantity">quantity</label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              name="quantity"
              placeholder=""
              defaultValue=""
              required=""
              rows={7}
            />
          </div>
          </div>
          <hr className="mb-4" />

        <h4>Deal</h4>
        <div className="">
        <div class="form-check form-switch col-md-4 mb-3">
  <input class="form-check-input me-2" type="checkbox" role="switch" id="deal" name="deal"/>
  <label class="form-check-label" for="deal">Deal</label>
</div>
<div className="col-md-4 mb-3">
            <label htmlFor="dealPrice">deal price</label>
            <input
              type="number"
              className="form-control"
              id="dealPrice"
              name="dealPrice"
              placeholder=""
              defaultValue=""
              required=""
              rows={7}
            />
          </div>

        </div>
          <hr className="mb-4" />

        <h4>Images</h4>
        <div className="row">
        <div className="mb-3">
  <label htmlFor="logoImage" className="form-label">product images</label>
  <input type="file" name='images' multiple className="form-control" id="logoImage"/>
</div>
</div>
<hr className="mb-4" />

        <h4>Specs</h4>
        <div className="row mb-3">
            <div className="col-md-3">
  <label htmlFor="storage" className="form-label">storage</label>
        <select class="form-select" aria-label="Default select example" name="storage">
  <option selected>select storage</option>
  <option value="16">16</option>
  <option value="32">32</option>
  <option value="64">64</option>
  <option value="128">128</option>
  <option value="256">256</option>
  <option value="512">512</option>
  <option value="1024">1024</option>
</select>       
            </div>
            <div className="col-md-3">
  <label htmlFor="ram" className="form-label">rams</label>
        <select class="form-select" aria-label="Default select example" name="ram">
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="6">6</option>
  <option value="8">8</option>
  <option value="12">12</option>
  <option value="16">16</option>
  <option value="24">24</option>
</select>       
            </div>
            <div className="col-md-3">
  <label htmlFor="sim" className="form-label">sim</label>
        <select class="form-select" aria-label="Default select example" name="sim">
  <option selected>how many sim</option>
  <option value="1">1</option>
  <option value="2">2</option>
</select>       
            </div>
            <div className="col-md-3 mb-3">
            <label className="mb-2" htmlFor="color">color</label>
            <input
              type="text"
              className="form-control"
              id="color"
              name="color"
              placeholder=""
              defaultValue=""
              required=""
            />
          </div>


        </div>
        

        <Button onClick={(e)=>{
        e.preventDefault()

        swal({
          title: "Are you sure you want to Add this details?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
          submit(e.target.form)
            swal("details was added successfully!", {
              icon: "success",
            });

          } else {
            
          }
        });
      }} type='submit' className='green-btn'>Add</Button>
      </Form>
    </div>
  </div>
</div>

    </>
    )
}

export default AddProductDetails