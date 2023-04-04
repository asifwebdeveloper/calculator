import { Link } from 'react-router-dom'
import '../components/navbar.css'
import React from 'react'


const navbar = () => {
  return (
    <div className='Navbar'>
        <Link to='/'>React Calculator</Link>
    </div>
  )
}

export default navbar