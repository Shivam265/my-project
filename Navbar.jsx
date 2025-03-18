import React from 'react'
import { FcCalendar } from "react-icons/fc";

const Navbar = ({handleLogout}) => {
  return (

    <div className='navbarmain'>
      <div className='row'>
        <div className='col-lg-12'>
          <nav className="navbar">
            <div className="container-fluid">
              <a className="navbar-brand "> <FcCalendar className=' logo' />Calendar</a>
              <form class="d-flex" role="search">
                <button onClick={handleLogout} className="btn btn-outline-light bg-danger">Logout</button>

              </form>

            </div>



          </nav>

        </div>
      </div>

    </div>
  )
}

export default Navbar
