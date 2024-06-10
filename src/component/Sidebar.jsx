import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div>
        {/* <!-- Sidebar --> */}
  <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white"style={{height:"660px"}}>
    <div className="position-sticky">
      <div className="list-group list-group-flush mx-3">
        <a href="#" className="list-group-item list-group-item-action py-2 ripple mt-4">
        <i className="fas fa-tachometer-alt fa-fw me-3"></i>
          <Link to={'/Home'} className='text-decoration-none'><span style={{color:"black"}}>Home</span></Link>
          </a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple mt-2">
        <i className="fa-solid fa-cart-shopping me-3"></i>
          <Link to={'/Product'} className='text-decoration-none'><span style={{color:"black"}}>Product</span></Link>
          </a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple mt-2">
        <i className="fa-solid fa-bag-shopping me-3"></i>
          <Link to={'/Sale'} className='text-decoration-none'><span style={{color:"black"}}>Sales Table</span></Link>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple mt-2">
          <i className="fa-solid fa-wallet me-3"></i>
          <Link to={'/Sale_Exp'} className='text-decoration-none'><span style={{color:"black"}}>Sale_Expense Data</span></Link>
          </a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple mt-2">
        <i className="fa-solid fa-right-from-bracket me-3"></i>
            <Link to={'/'} className='text-decoration-none'><span style={{color:"black"}}>Logout</span></Link>
            </a>
           
        </div>
    </div>
  </nav>
      
    </div>

  )
}
