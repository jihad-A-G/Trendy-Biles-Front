import {Button} from 'react-bootstrap'
import { Form } from 'react-router-dom'
import { useLoaderData,useSubmit } from 'react-router-dom'
import { useState } from 'react'
import swal from 'sweetalert'
const AddCategory = () =>{
  const submit = useSubmit()
  const [img, setImg] =useState(null);
  const [imgtoSubmit,setImgtoSubmit]=useState(null);
  const handleEditImg = (e)=>{
      if(e.target.files[0]){
          setImgtoSubmit(e.target.files[0]);
          const formData = new FormData();
          formData.append('categoryImage', imgtoSubmit);
      }
const file = e.target.files[0];
const reader = new FileReader();

reader.onloadend = () => {

setImg(reader.result);
};
if (file) {
  reader.readAsDataURL(file);
} else {
  setImg(null);
}
  }
  // console.log(data);


    return(
        <Form  method='POST' encType="multipart/form-data">
       <div className="mb-3">
  <label htmlFor="name" className="form-label">Category Name</label>
  <input type="text" name='name' className="form-control" id="name"/>
</div>
      <div className="mb-3">
  <label htmlFor="categoryImage" className="form-label">Category Image</label>
  <input type="file" name='categoryImage' className="form-control" id="categoryImage" onChange={handleEditImg}/>
</div>
<div className="mb-3">
  {img?<img src={img} alt="" width={260} height={230}/>:<div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>}
</div>

      <Button onClick={(e)=>{
        e.preventDefault()
        swal({
          title: "Are you sure you want to Add this category?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
          submit(e.target.form)
            swal("Category was Added successfully!", {
              icon: "success",
            });

          } else {
            
          }
        });
      }} type='submit' className='green-btn'>Add</Button>
    </Form>
    )
}

export default AddCategory

