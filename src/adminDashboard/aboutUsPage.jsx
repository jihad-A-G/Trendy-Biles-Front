import {Button} from 'react-bootstrap'
import { Form } from 'react-router-dom'
import { useLoaderData,useSubmit } from 'react-router-dom'
import { useState } from 'react'
import swal from 'sweetalert'
const AboutusPage = () =>{
  const submit = useSubmit()
  const data = useLoaderData()
  const [img, setImg] =useState(`http://localhost:4000/${data.logoImage}`);
  const [imgtoSubmit,setImgtoSubmit]=useState(null);
  const handleEditImg = (e)=>{
      if(e.target.files[0]){
          setImgtoSubmit(e.target.files[0]);
          const formData = new FormData();
          formData.append('logoImage', imgtoSubmit);
      }
const file = e.target.files[0];
const reader = new FileReader();

reader.onloadend = () => {

setImg(reader.result);
};
if (file) {
  reader.readAsDataURL(file);
} else {
  setImg(`http://localhost:4000/${data.logoImage}`);
}
  }
  // console.log(data);


    return(
        <Form  method='PUT'>
       <div className="mb-3">
  <label htmlFor="companyName" className="form-label">Company Name</label>
  <input type="text" name='companyName' className="form-control" id="companyName" defaultValue={data.companyName}/>
</div>
      <div className="mb-3">
  <label htmlFor="companyLogo" className="form-label">Company Logo</label>
  <input type="file" name='logoImage' className="form-control" id="companyLogo" onChange={handleEditImg} />
</div>
<div className="mb-3">
  <img src={img} alt="" width={260} height={230}/>
</div>
<div className="mb-3">
  <label htmlFor="aboutusContent" className="form-label">About us</label>
  <textarea name='content' className="form-control" id="aboutusContent" rows="7" defaultValue={data.content}></textarea>
</div>
<input type="hidden" name="defaultImage" defaultValue={data.logoImage} />
      <Button onClick={(e)=>{
        e.preventDefault()
        swal({
          title: "Are you sure you want to edit?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          submit(e.target.form)
          if (willDelete) {
            swal("About us was edited successfully!", {
              icon: "success",
            });

          } else {
            
          }
        });
      }} type='submit' className='green-btn'>Edit</Button>
    </Form>
    )
}

export default AboutusPage

