import React, { useState } from 'react'
import '../styles/admin.css'
import { Link } from 'react-router-dom'
import { FaEdit, FaSearch, FaThLarge, FaUsers } from 'react-icons/fa'
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
        <Link className='list-group-item list-group-item-action bg-dark text-white'>
          <FaThLarge/>Dashboard
        </Link>
      
      <div className='list-group list-group-flush'>
        <Link className='list-group-item list-group-item-action bg-dark text-white'>
         <FaUsers/>Registered Users
        </Link>
      </div>

      <button onClick={() => toogleMenu('category')} className='list-group-item list-group-item-action bg-dark text-white'>
        <FaEdit/> Food Category
      </button>
      {openMenus.category &&(
        <div className='ps-4'>
          <Link className='list-group-item list-group-item-action bg-dark text-white'>
          Add Category
          </Link>

          <Link className='list-group-item list-group-item-action bg-dark text-white'>
          Manage Category
          </Link>
        </div>
      )}

      <button onClick={() => toogleMenu('food')} className='list-group-item list-group-item-action bg-dark text-white'>
        <FaEdit/> Food Item
      </button>
        {openMenus.food &&(
          <div className='ps-4'>
            <Link className='list-group-item list-group-item-action bg-dark text-white'>
            Add Food Item
            </Link>

            <Link className='list-group-item list-group-item-action bg-dark text-white'>
            Manage Food Item
            </Link>
          </div>
        )}

        <div className='list-group list-group-flush'>
          <Link className='list-group-item list-group-item-action bg-dark text-white'>
          <FaSearch/>Search
          </Link>
        </div>
        <div className='list-group list-group-flush'>
          <Link className='list-group-item list-group-item-action bg-dark text-white'>
          <FaThLarge/>Manage reviews
          </Link>
        </div>
      </div>

    </div>
  )
}

export default AdminSidebar