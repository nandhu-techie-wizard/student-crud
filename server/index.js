const express=require('express')
const cors=require('cors')
const bodyparser=require('body-parser')
const mysql=require('mysql')
const add=express()
add.use(cors())
add.use(bodyparser.json())
add.use(express.json())
add.use(bodyparser.urlencoded({extended:true}))
add.use(express.static('public'))

let con=mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"root12345",
    database:"studentmangemant"
})
con.connect(function(error){
    if(error){
        console.log(error)
    }else{
        console.log("Database is success full connect")
    }
})
//insert base Details register
add.post('/insertdata',(request,response)=>{
    let {email,name,password}=request.body
    let sql='insert into teachdata(name,email,password,username)values(?,?,?,?)';
    //in here assigned the username as the email
    con.query(sql,[name,email,password,name],(error,result)=>{
    if(error){
        var a={"status":"error"}
        response.send(a)
    }
    else{
        var a={"status":"success"}
        response.send(a)
    }
    })
})
//Login page username and password Checking 
add.post('/login',(request,response)=>{
    let {email,password}=request.body;
    let sql ='select * from teachdata where email=?';
    con.query(sql,[email],(error,result)=>{
        if(error){
            var a={"status":"error"}
            response.send(a)
        }
        else if(result.length>0){
            //password checking
            let email1 =result[0].email;
            let password1=result[0].password;
            let teacherid =result[0].teacherid;
            if (email1===email && password1==password ){
                let s={"status":"success","teacherid":teacherid};
                response.send(s);
                }else{
                    let s={
                        "status":'Invalid_data'
                    };
                    response.send(s);
                }
                }
            else{
                let s={"status":"Invalied"}
                response.send(s)
            }
            })
        }
        
    )
//student data
add.post('/insertdatastudent/:teacherid',(request,response)=>{
    let {teacherid} = request.params;
    let {firstname,lastname,email,mobile,standard,}=request.body
    let sql='insert into student(firstname,lastname,email,mobile,standard,teacherid)values(?,?,?,?,?,?)';
    con.query(sql,[firstname,lastname,email,mobile,standard,teacherid],(error,result)=>{
    if(error){
        var a={"status":"error"}
        response.send(a)
    }
    else{
        var a={"status":"success"}
        response.send(a)
    }
    })
})
//get the data that teacher
add.get('/getdatastudent/:teacherid',(request,response)=>{
    let{teacherid}=request.params
    let sql='select * from  student where teacherid=?';
    con.query(sql,[teacherid],(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
//all student
add.get('/getdataallstudent',(request,response)=>{
    let sql='select * from  student';
    con.query(sql,(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
//delete
add.post('/deletestudent',(request,response)=>{
    let {idstudent}=request.body
    let sql='delete from student where idstudent=?';
    con.query(sql,[idstudent],(error,result)=>{
    if(error){
        var a={"status":"error"}
        response.send(a)
    }
    else{
        var a={"status":"success"}
        response.send(a)
    }
    })
})
add.get('/getdataupadte/:idstudent',(request,response)=>{
    let{idstudent}=request.params
    let sql='select * from  student where idstudent=?';
    con.query(sql,[idstudent],(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
//update services 
add.put('/updatedatastudent/:idstudent',(request,response)=>{
    let {idstudent} = request.params;   // get the id of record to be updated
    let {firstname,lastname,email,mobile,standard}=request.body
    let sql='update student set firstname=?,lastname=?,email=?,mobile=?,standard=? where idstudent=?'
    con.query(sql,[firstname,lastname,email,mobile,standard,idstudent],(error,result)=>{
    if(error){
        var a={"status":"error"}
        response.send(a)
    }
    else{
        var a={"status":"success"}
        response.send(a)
    }
    })
})
add.listen(3005,()=>{
    console.log("port is running in 3005")
})
