import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import axios from 'axios';

export default function Product() {
  const [data, setData] = useState({
    name: "",
    Price: "",
    Gst: ""

  });
  const [newData, setnewData] = useState([]);
  const [id, setId] = useState(undefined);

  function handleChange(e) {
    // console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value});
    console.log(data);
  }

  function handleSubmit() {
    // console.log(data);
    if (id === undefined) {


      // console.log(data);
      axios.post("https://6586aaf6468ef171392e89ce.mockapi.io/R_Pro", data)
        .then((res) => {
          console.log(res.data);
          loadData();

        });

      setData({
        name: "",
        Price: "",
        Gst: ""

      })

    }
     else {
      axios.put("https://6586aaf6468ef171392e89ce.mockapi.io/R_Pro/" + id, data)
        .then((res) => {
          console.log(res.data);
          loadData();
        });
      setData({
        name: "",
        Price: "",
        Gst: ""

      })

    }
  };
  function loadData() {
    axios.get("https://6586aaf6468ef171392e89ce.mockapi.io/R_Pro")
      .then((res) => {
        // console.log(res.data);
        setnewData(res.data)
      })
  }
  useEffect(() => {
    loadData();

  }, [])

  function handleDelete(e, id) {
    e.preventDefault();
    // alert(id);
    axios.delete("https://6586aaf6468ef171392e89ce.mockapi.io/R_Pro/" + id)
      .then((res) => {
        console.log(res.data);
        loadData();
      })

  };
  function handleUpdate(e, id) {
    e.preventDefault();
    setId(id)
    // alert(id)
    // axios.get("https://6586aaf6468ef171392e89ce.mockapi.io/Crud/"+id)
    axios.get(`https://6586aaf6468ef171392e89ce.mockapi.io/R_Pro/${id}`)
      .then((res) => {
        console.log(res.data);
        setData({
          name:res.data.name,
          Price:res.data.Price,
          Gst:res.data.Gst
  
        })
      })

  }


  return (
 
      <div style={{overflow:'hidden'}}>
<Navbar/> 
        <div className="row" style={{backgroundColor:"lightcyan"}}>
          <div className="col-lg-2">
            <Sidebar />
          </div>
          <div className="col-lg-10">
            <div>
        
              
                <div className="breadcrumbs">
                  <div className="container">
                    <div className="row ">
                      <div className="col-lg-10">
                        <p className="bread h3 mt-2">
                          <span>Product</span>
                        </p>
                      </div>
                      <div className="col-lg-2">
                        <button className='btn btn-info position-relative mt-2' data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>
                      </div>
                      </div>

                      {/* <!-- Modal --> */}
                      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                              </button>
                            </div>
                            <div className="modal-body">
                              <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input name="name" value={data.name} type="text" onChange={handleChange} className="form-control" aria-describedby='emailHelp' />
                              </div>
                              <div className="mb-3">
                                <label className="form-label">Price</label>
                                <input name="Price" value={data.Price} type="text" onChange={handleChange} className="form-control" aria-describedby='emailHelp' />
                              </div>
                              <div className="mb-3">
                                <label className="form-label">GST</label>
                                <input name="Gst" value={data.Gst} type="text" onChange={handleChange} className="form-control" aria-describedby='emailHelp' />
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                              {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                              <button type="submit" onClick={() => handleSubmit()} className="btn btn-primary" data-bs-dismiss="modal">Submit</button><br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              
             
              {/* Table */}
              <div className="card mt-3"style={{textAlign:"center",width:"95%"}}>
                {/* <div className="card-body"> */}
                  <table className="table table-striped">
                    <thead>
                      <tr>
                      <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">GST%</th>
                    <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                    newData.map((eachData, i) => {
                      return (
                        <tr key={i}>
                          <th scope='row'>{i + 1}</th>
                          <td>{eachData.name}</td>
                          <td>{eachData.Price}</td>
                          <td>{eachData.Gst}</td>
                        
                          <td>
                            <button onClick={(e) => handleUpdate(e, eachData.id)} className='btn btn-primary me-2' data-bs-toggle="modal" data-bs-target="#exampleModal"><i className='fa-solid fa-pencil'></i></button>
                            <button onClick={(e) => handleDelete(e, eachData.id)} className='btn btn-danger'><i className='fa-solid fa-trash'></i></button>
                          </td>

                        </tr>
                      )
                    })
                  }
                     </tbody>
                     </table>
                     </div>
                     </div>
            
            </div>
          </div>
        </div>
      // </div>

  )
}
