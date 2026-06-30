import React, { useState } from 'react'
import '../styles/admin.css'
import { Link } from 'react-router-dom'
import { FaChevronDown, FaChevronUp, FaComment, FaCommentAlt, FaEdit, FaFile, FaSearch, FaThLarge, FaUsers } from 'react-icons/fa'
const AdminSidebar = () => {

  const [openMenus, setOpenMenus] = useState({
    category: false,
    food: false,
    orders: false
  })

  const toogleMenu = (menu) => {
    setOpenMenus((prev) => ({...prev, [menu]:!prev[menu]}));
  }

  return (
    <div className='bg-dark text-white sidebar'>
      <div className='text-center p-3 border-bottom'>
        <img src='/images/admin.jfif' alt='admin icon' width= '70' className='img-fluid rounded-circle mb-2'></img>
        <h6 className='mb-0'>Admin</h6>
      </div>

      <div className='list-group list-group-flush'>
        <Link className='list-group-item list-group-item-action bg-dark text-white border-0'>
          <FaThLarge className='panel-icon'/>Dashboard
        </Link>
      
      <div className='list-group list-group-flush'>
        <Link className='list-group-item list-group-item-action bg-dark text-white'>
         <FaUsers className='panel-icon'/>Registered Users
        </Link>
      </div>

      <button onClick={() => toogleMenu('category')} className='list-group-item list-group-item-action bg-dark text-white border-0'>
        <FaEdit/> Food Category {openMenus.category ? <FaChevronUp/> : <FaChevronDown/>}
      </button>
      {openMenus.category &&(
        <div className='ps-4'>
          <Link className='list-group-item list-group-item-action bg-dark text-white border-0'>
          Add Category
          </Link>

          <Link className='list-group-item list-group-item-action bg-dark text-white border-0'>
          Manage Category
          </Link>
        </div>
      )}

      <button onClick={() => toogleMenu('food')} className='list-group-item list-group-item-action bg-dark text-white border-0'>
        <FaEdit/> Food Item {openMenus.food ? <FaChevronUp/> : <FaChevronDown/>}
      </button>
        {openMenus.food &&(
          <div className='ps-4'>
            <Link className='list-group-item list-group-item-action bg-dark text-white border-0'>
            Add Food
            </Link>

            <Link className='list-group-item list-group-item-action bg-dark text-white border-0'>
            Manage Food
            </Link>
          </div>
        )}
      
      <button onClick={() => toogleMenu('orders')} className='list-group-item list-group-item-action bg-dark text-white border-0'>
        <FaEdit/> Orders {openMenus.orders ? <FaChevronUp/> : <FaChevronDown/>}
      </button>
        {openMenus.orders &&(
          <div className='ps-4'>
            <Link className='list-group-item list-group-item-action bg-dark text-white border-0'>
            Not Confirmed
            </Link>
            <Link className='list-group-item list-group-item-action bg-dark text-white border-0'>
            Confirmed
            </Link>
            <Link className='list-group-item list-group-item-action bg-dark text-white border-0'>
            Being Prepared
            </Link>
            <Link className='list-group-item list-group-item-action bg-dark text-white border-0'>
            Food Pickup
            </Link>
            <Link className='list-group-item list-group-item-action bg-dark text-white border-0'>
            Delivered
            </Link>
            <Link className='list-group-item list-group-item-action bg-dark text-white border-0'>
            Cancelled
            </Link>
            <Link className='list-group-item list-group-item-action bg-dark text-white border-0'>
            All Orders
            </Link>
          </div>
        )}

        <div className='list-group list-group-flush'>
          <Link className='list-group-item list-group-item-action bg-dark text-white'>
          <FaFile className='panel-icon'/>B/w Dates Report
          </Link>
        </div>
        <div className='list-group list-group-flush'>
          <Link className='list-group-item list-group-item-action bg-dark text-white'>
          <FaSearch className='panel-icon'/>Search
          </Link>
        </div>
        <div className='list-group list-group-flush'>
          <Link className='list-group-item list-group-item-action bg-dark text-white'>
          <FaCommentAlt className='panel-icon'/>Manage reviews
          </Link>
        </div>
      </div>

    </div>
  )
}

export default AdminSidebar