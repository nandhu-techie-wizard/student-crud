import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export function Dashboard(){
    var {teacherid}=useParams()
    const[items,setItems]=useState([])
    useEffect(()=>{
      fetch("http://localhost:3005/getdataallstudent")
      .then((res) => res.json())
      .then((data)=> setItems(data))
  })
  function delet(idstudent){
    let key={idstudent:idstudent}
    axios.post('http://localhost:3005/deletestudent',key)
    .then(function(res){
        if(res.data.status ==="error"){
            alert("Data is not del")
        }
        else if(res.data.status === "success"){
            alert("Data is deleted")
        }
}) }
    return(<>
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-info">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <Link to={`/dashboard/${teacherid}`}className="nav-link text-primary fw-bolder" href="#">Home</Link>
              </li>
              <li class="nav-item">
              <Link to={`/Studentform/${teacherid}`}className="nav-link text-primary fw-bolder" href="#">New student</Link></li>
      
              <li class="nav-item">
              <Link to='/'className="nav-link text-primary fw-bolder" href="#">Logout</Link></li>
              
            </ul>
          </div>
        </div>
      </nav>
        <div class="table-responsive">
  <table class="table table-striped">
  <thead class="table-secondary">
  <tr>
  <th>student_id</th>
  <th>First Name</th>
  <th>Last Name</th>
  <th>Email Id</th>
  <th>Phone Number</th>
  <th>Standard</th>
  <th>Edit</th>
  <th>Delete</th>
  </tr>
</thead>
    <tbody>
    {items.map((value,index)=>(
      <>
      <tr>
    <td>{value.idstudent}</td>
    <td>{value.firstname}</td>
    <td>{value.lastname}</td>
    <td>{value.email}</td>
    <td>{value.mobile}</td>
    <td>{value.standard}</td>
   
    <td> <Link to= {`/Studed/${value.teacherid}/${value.idstudent}`}>
    <button className="btn btn-primary ">update</button></Link></td>
    <td><button className="btn btn-danger " onClick={()=>{delet(value.idstudent)}}>Delete</button>
   
    </td>
    </tr>
    </>
    ))}
    </tbody>
  </table>
</div>
        </>)
}