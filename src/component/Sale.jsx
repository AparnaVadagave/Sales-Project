import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

export default function Sale() {
  const [newData, setNewData] = useState([]);
  const [rows, setRows] = useState([{ quantity: 1 }])
  const[overalltotal,setOverallTotal]=useState(0);
  const [totalprice,setTotalPrice]=useState(0);
  const[totalgst,setTotalGst]=useState(0);

  let navigate = useNavigate();

  const [personaldata,setPersonalData]=useState({
    date:"",
    customerName:"",
    mobileNumber:""
    
  })
  
  function handleChange(id, index) {
    console.log(id);
    const dropdown = newData.find((e) => e.id === id)
    let copyRows = [...rows]
    copyRows[index].selectedproduct =dropdown

    setRows(copyRows)
   
  }
  console.log("handlechange",rows);
  // console.log(data);
  // console.log("handlechange",rows);

  const addrow = () => {
    let copyrows = [...rows]
    copyrows.push({ quantity: 1 })
    setRows(copyrows)

    console.log(rows);
  }
  useEffect(()=>{
    let calculatetotal = 0
    let totalprice=0
    let totalgst=0
    for (let index = 0; index < rows.length; index++) {
      let row = rows[index];
      if (row.selectedproduct) {
        totalprice+=row.selectedproduct.Price*row.quantity;
        totalgst+=row.selectedproduct.Price*row.selectedproduct.Gst/100
        calculatetotal +=row.selectedproduct.Price*row.selectedproduct.Gst/100*row.quantity+row.selectedproduct.Price * row.quantity
      };
      // console.log("last",row); 
    }
    setOverallTotal(calculatetotal)
    setTotalPrice(totalprice)
    setTotalGst(totalgst)
  })

  function loadData() {
    axios.get("https://6586aaf6468ef171392e89ce.mockapi.io/R_Pro")
      .then((res) => {
        // console.log(res.data);
        setNewData(res.data)
      })
  }

  const quantitychange = (value, i) => {
    // console.log(value);
    let copRows = [...rows]
    copRows[i].quantity = value
    setRows(copRows)
  }
  useEffect(() => {
    loadData()
  }, [])

   function handleData(e){
    e.preventDefault()
    setPersonalData({ ...personaldata, [e.target.id]: e.target.value })
   }

  function handleSubmit(e) {
    const postdata = {
      personaldata: personaldata,
      overalltotal:overalltotal,
      totalprice:totalprice,
      totalgst:totalgst,
      products:rows

    }

    axios.post("https://6586aaf6468ef171392e89ce.mockapi.io/Sales",postdata)
    .then((res) => {
      console.log(res);
      setPersonalData(res.data)
      loadData();
    });

    navigate("/Sale_Exp")
    
    
  }
  return (
      <div style={{overflow:'hidden'}}>
       <Navbar/> 
        <div className="row" style={{ backgroundColor: "lightblue"}}>
          <div className="col-lg-2">
            <Sidebar />
          </div>


          <div className="col-lg-10 ms-3" style={{width:"1200px"}}>
            <div className="container">
            <p className="bread h3 mt-2">
              <span>Sales</span>
            </p>
            </div>
            
           
            <div className="card mt-4">
              <div className="card-body">
                <div className="row" >
              <div className="col-lg-4 mb-3">
                <label for="date" className="form-label">Date:</label>
            <input type="date" className="form-control" id="date"  onChange={(e)=>handleData(e)} value={personaldata.date} />
            </div>
            <div className="col-lg-4 mb-3">
              <label for="customerName" className="form-label">Customer Name:</label>
              <input type="text" className="form-control" id="customerName" onChange={(e)=>handleData(e)} value={personaldata.customerName} fdprocessedid="hxtyom"/>
              </div>
              <div className="col-lg-4 mb-3">
                <label for="mobileNumber" className="form-label">Mobile Number:</label>
              <input type="tel" className="form-control" id="mobileNumber"  onChange={(e)=>handleData(e)} value={personaldata.mobileNumber} fdprocessedid="4x6z7"/>
              </div>
              </div>
              <button className="btn btn-primary mb-3" fdprocessedid="j53sie" onClick={addrow}>Add Row</button>
              </div>
            </div>
 
            <div className="card mt-4">
              <div className="card-body">
              <table className="table">
                <thead>
                  <tr style={{textAlign:"center"}}>
                    {/* <th>No</th> */}
                  <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>GST</th>
                    <th>Total</th>
                  
                    </tr>
                    </thead>
              <tbody style={{textAlign:"center"}}>
              {rows.map((row, i) => {
                      return (
                        <tr key={i}>
                          {/* <th scope='row'>{i+1}</th> */}
                          <td>
                            <select onChange={((e) => handleChange(e.target.value, i))} className='form-select'>
                              <option value="">--Select Product--</option>
                              {
                                newData.map((eachData, i) => {
                                  return (
                                    <option key={i} value={eachData.id}>{eachData.name}</option>
                                  )
                                })
                              }
                            </select>
                          </td>
                          <td>
                            {row.selectedproduct ? row.selectedproduct.Price:""}
                          </td>
                          <td>
                            <input className='form-control' type='number' value={row.quantity} onChange={((e) => quantitychange(e.target.value, i))}/>
                          </td>

                           <td>
                             {row.selectedproduct ? row.selectedproduct.Gst:""}
                          </td>
                          <td>
                            {row.selectedproduct ? row.selectedproduct.Price*row.selectedproduct.Gst/100*row.quantity+row.selectedproduct.Price*row.quantity:""}
                          </td>
                        </tr>
                      )
                    })}
                </tbody>
                </table><hr/>

           <div className="row">
            <div className="col-lg-10">
              <button className="btn btn-success mt-2" onClick={((e)=>handleSubmit(e))}>Submit Data</button>
              </div>
             <div className='col-lg-2  justify-content-end'>
              <input className='form-control' value={overalltotal} type='text'/>
              </div>
              
              </div>

              
              </div>
              </div>
             
          </div>
        </div>
      </div>

  )
}
