import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
export function Login(){
    localStorage.clear()
    const handlelogin=async(event)=>{
    event.preventDefault();
    var email=document.getElementById("email").value
    var password=document.getElementById("password").value
    var key={
        "email":email,"password":password
    }
    await axios.post("http://localhost:3005/login",key)
    .then(function(res){
        if (res.data.status === "error"){
            alert('Invalid Credentials contact Admin')
            window.location.reload();
            
        }
        else if (res.data.status==='success')
        {   let teacherid=res.data.teacherid;
            localStorage.setItem('teacherid',teacherid); 
            window.location.href=`/dashboard/${teacherid}`;} 
         else if(res.data.status==='Invalid_data'){
            alert("the given data is incorrect")
        }
        else if(res.data.status==='Invalied'){
            alert("your username and password is incorrect")
        }
    })
    }

return(
<>
     <section class="vh-100" style={{background: "#9A616D;"}}>
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
            <div class="card" >
            <div class="row g-0">
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form" class="img-fluid" />
                </div>
                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">

                    <form onSubmit={handlelogin}>

                    <div class="d-flex align-items-center mb-3 pb-1">
                        <i class="fas fa-cubes fa-2x me-3" style={{color: "#ff6219;"}}></i>
                        <span class="h1 fw-bold mb-0">Logo</span>
                    </div>

                    <h5 class="fw-normal mb-3 pb-3">Sign into your account</h5>

                    <div class="form-outline mb-4">
                    <label class="form-label" for="email">Email address</label>
                        <input type="email" id="email" class="form-control form-control-lg"  placeholder='email' />
                 
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="password">Password</label>
                        <input type="password" id="password" class="form-control form-control-lg" placeholder='Password'/>
                   
                    </div>

                    <div class="pt-1 mb-4">
                        <button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                    </div>
                    
                  <p class="mb-5 pb-lg-2" style={{color: "#393f81;"}}>Dont have an account?  <Link to="/signup"> Sign Up/Register</Link></p>
                    </form>

                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
</>
);
}
