import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export function  EditStudentform() {
    var {teacherid}=useParams()
  var {idstudent}=useParams()
  const [firstname,setFirstname]= useState("")
  const [lastname,setLastname]= useState("")
  const [mobile,setMobile] = useState("")
  const [email,setEmail] = useState("")
  const [standard,setStandard]=useState("")
  useEffect(()=>{
      fetch("http://localhost:3005/getdataupadte/"+idstudent)
      .then(response=> response.json())
      .then((res)=>{
          setFirstname(res[0].firstname);
          setLastname(res[0].lastname);
          setMobile(res[0].mobile)
          setEmail(res[0].email)
          setStandard(res[0].standard)
      })
  },[])
  const handleupadte=(event)=>{
      event.preventDefault()
      var key={
        "firstname":firstname,
        "lastname":lastname,
        "mobile":mobile,
        "email":email,
        "standard":standard
      }
      axios.put("http://localhost:3005/updatedatastudent/"+idstudent,key)
      .then(function (res){
          if(res.data.status==="error"){
              alert('Error not upadte')
          }
          else if(res.data.status === "success"){
              alert("the value are updated")
                 window.location.href=`/dashboard/${teacherid}`;
               
          }
  })
  }
    return(
        <>
        <section class="vh-140 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-12 col-lg-9 col-xl-7">
              <div class="card shadow-2-strong card-registration">
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 text-center">Upadte Registration Form</h3>
              
                  <form class="mx-1 mx-md-4"onSubmit={handleupadte}>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="firstname">Your Name</label>
                      <input type="text" id="firstname" class="form-control" placeholder="firstname"value={firstname} onChange={(a)=>{setFirstname(a.target.value)}}/>

                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                  <div class="form-outline flex-fill mb-0">
                  <label class="form-label" for="lastname">Last Name</label>
                    <input type="text" id="lastname" class="form-control" placeholder="lastname"value={lastname} onChange={(a)=>{setLastname(a.target.value)}}/>

                  </div>
                </div>
                <div class="d-flex flex-row align-items-center mb-4">
                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                <div class="form-outline flex-fill mb-0">
                <label class="form-label" for="lastname">Mobile Number</label>
                  <input type="text" id="mobile" class="form-control" placeholder="mobile"value={mobile} onChange={(a)=>{setMobile(a.target.value)}}/>

                </div>
              </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="email">Your Email</label>
                      <input type="email" id="email" class="form-control" placeholder="Email"value={email} onChange={(a)=>{setEmail(a.target.value)}}/>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                  <div class="form-outline flex-fill mb-0">
                  <label class="form-label" for="standard">Standard</label>
                    <input type="text" id="standard" class="form-control" placeholder="standard" value={standard} onChange={(a)=>{setStandard(a.target.value)}}/>
                  </div>
                </div>
     
                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  
                    <button type="submit" class="btn btn-primary btn-lg">update Student</button>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}