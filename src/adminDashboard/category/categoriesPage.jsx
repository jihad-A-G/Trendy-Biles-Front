import { Table,Button, Container } from "react-bootstrap";
import { useState } from "react";
import { useLoaderData,Form,Link,useSubmit } from "react-router-dom";
import LinearIndeterminate from "../components/progressBar";
const Categories = () =>{
    const data = useLoaderData()
    const submit = useSubmit()
     const [currentPage, setCurrentPage] = useState(1);
 const itemsPerPage = 10;
 const totalPages = Math.ceil(data.length/ itemsPerPage);

 const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
 };

 const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
 };
 const displayedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return(
    <>
    {data?
    <>
      <Container className='d-flex justify-content-between align-items-center mb-3 p-2 border-bottom border-3'>
            <h3 className='text-black '>Categories</h3>
            <Button className='bg-primary border-0'><Link className="text-white " style={{textDecoration: "none"}} to={'add-category'}><i class="bi bi-plus-circle"></i> Add Category</Link></Button>

        </Container>
     <Table responsive bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Confirmed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {displayedData.map(row=>{
                
                return(
                 <tr key={row._id}>
                 <td>{row.name}</td>
                 <td>{row.confirm.toString()}</td>
                 <td className="d-flex gap-3"><Button variant="primary"><Link className="text-white " style={{textDecoration: "none"}} to={`${row._id}/edit-category`}><i className="bi bi-pencil-square"></i> Edit</Link></Button>
                 <Form method="DELETE" action={`${row._id}/delete`}>
                      <input name='id' type='hidden' value={`${row._id}`}/>
                    <Button type='submit' onClick={(e)=>{
                       e.preventDefault()
                       swal({
                         title: "Are you sure you want to delete?",
                         icon: "warning",
                         buttons: true,
                         dangerMode: true,
                       })
                       .then((willDelete) => {
                         if (willDelete) {
                           submit(e.target.form)
                           swal("Category was deleted successfully!", {
                             icon: "success",
                           });
               
                         } else {
                           
                         }
                       });
                    }} variant="danger"><i className="bi bi-trash-fill"></i> Delete</Button></Form>
                    <Button variant="secondary">Confirm</Button></td>
               </tr>
                )
            })}
        
             
      
        </tbody>
      </Table>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" onClick={handlePrevPage}>Previous</a>
          </li>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <li key={page} className={`page-item ${currentPage === page ? 'active' : null}`} onClick={() => setCurrentPage(page)}>
              <a className="page-link" href="#">{page}</a>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" href="#" onClick={handleNextPage}>Next</a>
          </li>
        </ul>
      </nav>
      </>:<LinearIndeterminate/>}
     
    </>
    )
}

export default Categories