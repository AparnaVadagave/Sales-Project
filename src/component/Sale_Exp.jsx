import React, { useEffect ,useRef,useState} from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';


export default function Sale_Exp() {
  const [newData, setnewData] = useState([]);
  const [rowData, setRowData] = useState([]);
  const componentPDF = useRef();

  function loadData() {
    axios.get("https://6586aaf6468ef171392e89ce.mockapi.io/Sales")
      .then((res) => {
         console.log(res.data);
        //  console.log(res.data[0].row[0].selectedproduct);
        setnewData(res.data)
        setRowData(res.data.row)
      })
    }
    
    console.log(rowData);
  useEffect(() => {
    loadData();

  }, [])

  function handleDelete(e, id) {
    e.preventDefault();
    // alert(id);
    axios.delete("https://6586aaf6468ef171392e89ce.mockapi.io/Sales/" + id)
      .then((res) => {
        console.log(res.data);
        loadData();
      })

  };

  const generatePdf = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "bill",
    onafterprint: () => alert("Data saved in pdf")
   

});

  
  
  return (
   
    <div style={{overflow:'hidden'}}>
      <Navbar/> 
     <div ref={componentPDF}>
      
        <div className="row" style={{ backgroundColor: "paleturquoise"}}>

          <div className="col-lg-2">
            <Sidebar />
          </div>


          <div className="col-lg-10">
            <div className="container">
              <p className="bread h3 mt-2">
                <span>Sale Expense Table</span>
              </p>
            </div>

            <div className="card"style={{margin:"2%"}}>
              <div className="card-body">
                <table className="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Customer Name</th>
                    <th>Mobile No</th>
                    <th>Total Price</th>
                    <th>Total GST</th>
                    <th>Overall Subtotal</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                       newData.map((eachData,i)=>{
                        return(
                            <tr key={i}>
                                {/* <th scope='row'>{i+1}</th> */}
                                <td>{eachData.personaldata.date}</td>
                                <td>{eachData.personaldata.customerName}</td>
                                <td>{eachData.personaldata.mobileNumber}</td>
                                <td>{eachData.totalprice}</td>
                                <td>{eachData.totalgst}</td>
                              <td>{eachData.overalltotal}</td>
                 <td>
                   <button className="btn btn-primary me-2" aria-label='delete' onClick={generatePdf}><i class="fa-solid fa-print"></i></button>
                  
                  
                 <button onClick={(e) => handleDelete(e, eachData.id)} className="btn btn-danger ml-2" ><i className='fa-solid fa-trash'></i></button>
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
      </div>

  )
}



 