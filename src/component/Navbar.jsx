import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div style={{backgroundColor:"lavender"}}>
<nav className="navbar navbar-light">
    <a className="navbar-brand fs-3 h1 ms-3">Sales Products...</a>
    <form className="d-flex">
      <h1>{localStorage.getItem("name")}</h1>
     <Link to={'/'}> <button  className='btn btn-success me-5 fs-5'>Logout</button></Link>
    </form>
</nav>
    </div>
  )
}
