import axios from "axios";
import React from "react";

export function Register(){
    const handleinsertsignup=async(event)=>{
        event.preventDefault()
        var name=document.getElementById("name").value
        alert(name)
        var email=document.getElementById("email").value
        console.log(email)
        var password=document.getElementById("password").value
        var key={
          "email":email,
          "name":name,
          "password":password
        }
         if(email==''){
          alert("please fill email")
        }else if(name==''){
                alert("please fill name")
        }else if(password==''){
                alert("please fill password")
        }else{
          await axios.post("http://localhost:3005/insertdata",key)
          .then((res)=>{
            if(res.data.status==="error"){
              alert("data is not insert")
            }else if(res.data.status==="success"){
              alert("data is inserted")
              window.location.href="/login";
            }
          })
        }
      }
    return(
        <>
        <section class="vh-100" >
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" >
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4"onSubmit={handleinsertsignup}>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="name">Your Name</label>
                      <input type="text" id="name" class="form-control" placeholder="Name"/>

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
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="password">Password</label>
                      <input type="password" id="password" class="form-control" placeholder="password"/>
           
                    </div>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  
                    <button type="submit" class="btn btn-primary btn-lg">Register</button>
                  </div>
                </form>
              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}