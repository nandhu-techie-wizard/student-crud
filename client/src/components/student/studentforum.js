import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export function Studentform(){
  var {teacherid}=useParams()
  const insertstudentform=async(event)=>{
    event.preventDefault()
    var firstname=document.getElementById("firstname").value
    alert(firstname)
    var lastname=document.getElementById("lastname").value
    var mobile=document.getElementById("mobile").value 
    console.log(mobile)
    var email=document.getElementById("email").value
    console.log(email)
    var standard=document.getElementById("standard").value 
    console.log(standard)
    var key={
      "firstname":firstname,
      "lastname":lastname,
      "mobile":mobile,
      "email":email,
      "standard":standard
    }
  if(mobile==''){
      alert("please fill mobile")
    }else if(email==''){
      alert("please fill email")
    }else if(firstname==''){
            alert("please fill firstname")
    }else if(lastname==''){
            alert("please fill lastname")
    }else if(standard==''){
            alert("please fill standard")
    }else{
      await axios.post("http://localhost:3005/insertdatastudent/"+teacherid,key)
      .then((res)=>{
        if(res.data.status==="error"){
          alert("data is not insert")
        }else if(res.data.status==="success"){
          alert("data is inserted")
          window.location.href=`/dashboard/${teacherid}`;
        }
      })
    }
  }
    return(
        <>
        <section class="vh-140 gradient-custom bg-light bg-gradient">
        <div class="container py-5 h-100">
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-12 col-lg-9 col-xl-7">
              <div class="card shadow-2-strong card-registration">
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 text-center">Student Registration Form</h3>
              
                  <form class="mx-1 mx-md-4"onSubmit={insertstudentform}>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="firstname">Your Name</label>
                      <input type="text" id="firstname" class="form-control" placeholder="firstname"/>

                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                  <div class="form-outline flex-fill mb-0">
                  <label class="form-label" for="lastname">Last Name</label>
                    <input type="text" id="lastname" class="form-control" placeholder="lastname"/>

                  </div>
                </div>
                <div class="d-flex flex-row align-items-center mb-4">
                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                <div class="form-outline flex-fill mb-0">
                <label class="form-label" for="lastname">Mobile Number</label>
                  <input type="text" id="mobile" class="form-control" placeholder="mobile"/>

                </div>
              </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="email">Your Email</label>
                      <input type="email" id="email" class="form-control" placeholder="Email" />
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                  <div class="form-outline flex-fill mb-0">
                  <label class="form-label" for="standard">Standard</label>
                    <input type="text" id="standard" class="form-control" placeholder="standard"/>
                  </div>
                </div>
                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  
                    <button type="submit" class="btn btn-primary btn-lg">Add Student</button>
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