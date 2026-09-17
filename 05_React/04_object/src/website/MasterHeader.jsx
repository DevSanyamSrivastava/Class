import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.css';
const MasterHeader = () => {
  return (
    <>
      {/* <nav>
    <ul>
     <Link
     to='/'
     >Home</Link>
     <Link
     to='/contact-me'
     >Contact us</Link>
     <Link
     to='/aboutMe'
     >About</Link>
      
    </ul>
   </nav> */}
      <nav>
        <ul>
          <NavLink
            to='/'
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'black',
              backgroundColor: isActive ? 'grey' : 'white'
            })}
          >
            Home
          </NavLink>
          <NavLink
            to='/contact-me'
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'black',
              backgroundColor: isActive ? 'grey' : 'white'
            })}
          >
            Contact
          </NavLink>
          <NavLink
            to='/aboutMe'
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'black',
              backgroundColor: isActive ? 'grey' : 'white'
            })}
          >
            About
          </NavLink>

        </ul>
      </nav>
    </>
  )
}

export default MasterHeader