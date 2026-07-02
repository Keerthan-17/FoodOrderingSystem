import React, { useEffect, useState } from 'react'
import AdminLayout from '../components/AdminLayout'
import { Link } from 'react-router-dom'

const ManageCategory = () => {
  
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/manage-category/')
      .then(res=> res.json())
      .then(data => {
        setCategories(data)
      })
  },[])
  return (
    <AdminLayout>
      <div>
        <h3 className="text-center text-primary mb-4">
          <i className="fas fa-list me-1"></i> Manage Category
        </h3>

        <h5 className='text-end text-muted'>
          <i className='fas fa-database'></i> Total Categories
          <span className='ms-2 me-2 badge bg-success'>{categories.length}</span>
        </h5>

        <div className='mb-4'>
          <input type='text' className='form-control w-50' placeholder='Search By Category Name...'></input>
        </div>

        <table className='table table-bordered table-hover table-striped'>
          <thead className='table-dark'>
            <tr>
              <th>S.No</th>
              <th>Category Name</th>
              <th>Category Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat,index)=>(
            <tr>
              <td>{index+1}</td>
              <td>{cat.category_name}</td>
              <td>{new Date(cat.creation_date).toLocaleString()}</td>
              <td>
                <Link className='btn btn-sm btn-primary me-2'>
                  <i className='fas fa-edit me-1'></i> Edit
                </Link>
                <button className='btn btn-sm btn-danger'>
                  <i className='fas fa-trash-alt me-1'></i> Delete
                </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  )
}

export default ManageCategory