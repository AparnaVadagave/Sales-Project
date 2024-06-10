import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,Navigate } from 'react-router-dom';

export default function List() {
    const [data,setData] = useState([]);
    function loadData(){
        axios.get("https://6586aaf6468ef171392e89ce.mockapi.io/proj_react")
        .then((res)=>{
            console.log(res.data);
            setData(res.data)
        })
    };
    useEffect(()=>{
        loadData();
    },[]);
    
    function handleDelete(e,id){
        e.preventDefault();
        axios.delete("https://6586aaf6468ef171392e89ce.mockapi.io/proj_react/"+id)
        .then((res)=>{
            console.log(res.data);
            loadData();
        })
    };

    // function handleUpdate(e,id){
    //     e.preventDefault();
    //     Navigate("/Register/"+id)
    // };
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
                <table className='table'>
                      <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Surname</th>
                            <th scope="col">City</th>
                            <th scope="col">Qualification</th>
                            <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                            data.map((eachData,i)=>{
                                return(
                                    <tr key={i}>
                                        <th scope="row">{i+1}</th>
                                        <td>{eachData.name}</td>
                                        <td>{eachData.surname}</td>
                                        <td>{eachData.city}</td>
                                        <td>{eachData.qualification}</td>
                                        <td>
                                            <Link to={"/Register/"+eachData.id}>
                                            <button className='btn btn-primary me-2'>Edit</button>
                                             </Link>
                                           <button onClick={(e)=>handleDelete(e,eachData.id)} className='btn btn-danger'>Delete</button>
                                            </td>
                                    </tr>
                                )
                            })
                        }
                      </tbody>
                </table>
            </div>
            <div className="col-lg-1"></div>
        </div>
      </div>
    </div>
  )
}
