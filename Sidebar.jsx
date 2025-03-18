import React from 'react'
import { BiHome } from "react-icons/bi";
import { BiAlbum } from "react-icons/bi";
import { MdOutlineElectricalServices } from "react-icons/md";
import { FaCalendarDay } from "react-icons/fa";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';



const Sidebar = () => {
  return (
    <div>
      <NavLink className="list-unstyled" to="/dashb">
        <ul className='list-unstyled text-black '>
          <li className='sidebarli p-2 list-unstyled text-decoration-none'>
            <BiHome className='bg-white text-black mx-2' />
            Dashboard </li>
        </ul>
      </NavLink>


      <NavLink className="list-unstyled" to="/equipments">
        <ul className='list-unstyled text-black'>
          <li className='sidebaritem2 p-2'>
            <BiAlbum className="text-black mx-2" />
            Equipment</li>
        </ul>
      </NavLink>

      <NavLink className="list-unstyled" to="/services">
        <ul className='list-unstyled text-black'>
          <li className='sidebaritem3  p-2 ' > <MdOutlineElectricalServices className='text-black mx-2' />
            Services</li>
        </ul>
      </NavLink>

      <NavLink className="list-unstyled" to="/Timeslots">
        <ul className='list-unstyled text-black'>
          <li className='sidebaritem4  p-2'> <FaCalendarDay className='text-black mx-2' />
            Timeslots</li>
        </ul>
      </NavLink>

      <NavLink className="list-unstyled" to="/Booking">
        <ul className='list-unstyled text-black'>
          <li className='sidebaritem5  p-2'><IoCheckmarkDoneCircleSharp className='text-black mx-2' />
            Booking</li>
        </ul>
      </NavLink>
      </div>
    



  )
}

export default Sidebar;
