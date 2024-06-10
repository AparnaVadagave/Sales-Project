import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
    let navigate = useNavigate();
    let {id} = useParams();
    const [data,setData]=useState({
        name:"",
        surname:"",
        city:"",
        qualification:""
    });
    function handleChange(e){
        e.preventDefault();
        setData({...data,[e.target.id]:e.target.value})
    };
    function handleSubmit(e){
e.preventDefault();
// console.log(data);
if (id === undefined) {
  axios.post("https://6586aaf6468ef171392e89ce.mockapi.io/proj_react",data)
  .then((res)=>{
    console.log(res.data);
    setData({
      name:"",
      surname:"",
      city:"",
      qualification:""
    })
    navigate("/list")
  })
}else{
  axios.put("https://6586aaf6468ef171392e89ce.mockapi.io/proj_react/"+id,data)
   .then((res)=>{
    console.log(res.data);
    navigate("/list");
  })
}
    };
    function loadData(){
      axios.get("https://6586aaf6468ef171392e89ce.mockapi.io/proj_react/"+id)
      .then((res)=>{
console.log(res.data);
setData({
  name:res.data.name,
  surname:res.data.surname,
  city:res.data.city,
  qualification:res.data.qualification
})
      })
    }
    useEffect(()=>{
      if (id) {
        loadData();
      }
    },[])
    
  return (
    <>
     <div className="container">
      <div className="row">
        <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <form>
            <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input value={data.name} onChange={(e)=>handleChange(e)}  id="name" type="text" className="form-control" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Surname</label>
    <input value={data.surname} onChange={(e)=>handleChange(e)} id="surname" type="text"  className="form-control" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">City</label>
    <input value={data.city} onChange={(e)=>handleChange(e)} id="city" type="text"  className="form-control" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Qualification</label>
    <input value={data.qualification} onChange={(e)=>handleChange(e)} id="qualification" type="text"  className="form-control" />
  </div>
  <button type="submit" onClick={(e)=>handleSubmit(e)} className="btn btn-primary">Submit</button>
            </form>
          </div>
        <div className="col-lg-2">
        </div>
      </div>
     </div>
    </>
  )
}
