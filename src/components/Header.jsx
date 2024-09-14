import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css"
function Header() {
  return (
    <header>
        <nav>
            <Link className='a' to="/">Got To Home</Link>
            <Link className='a' to="/findJobs">Find Jobs</Link>
        </nav>
    </header>
  )
}

export default Header
