import React, { useEffect, useState } from 'react'
import AdminLayout from '../components/AdminLayout'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AddFood = () => {
  
  const [categories, setCategories] = useState([])
  const [formData, setFormData] = useState({
    category : '',
    item_name : '',
    item_price : '',
    item_description : '',
    image : null,
    item_quantity : '',
  })
  useEffect(()=>{
      fetch('http://127.0.0.1:8000/api/manage-category/')
        .then(res=> res.json())
        .then(data => {
          setCategories(data)
        })
    },[])

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData((prev) => ({
      ...prev,
      [name] : value
    }));
  }

  const handleFileChange = (e) => {

    setFormData((prev) => ({
      ...prev,
      image : e.target.files[0]
    }));
  }


  const handleSubmit = async (e)=>{
        e.preventDefault()
    
        try{
          const response = await fetch('http://127.0.0.1:8000/api/add-food/', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify()
          })
      
          const data = await response.json()
      
          if (response.status===201) {
            toast.success(data.message)
          }
          else {
            toast.error("Something went wrong!!")
          }
        }
        catch (error){
          console.error(error);
          toast.error("Error connecting to server")
        }
      }

  return (
    <AdminLayout>
      <ToastContainer autoClose={2000} position='top-right'/>
      <div className='row'>
        <div className="col-md-8">
          <div className="shadow-sm p-4 rounded">
            <h4 className="mb-4">
              <i className="fas fa-plus-circle text-primary me-2"></i>Add Food Item
            </h4>

            <form onSubmit={handleSubmit} encType='multipart/form-data'>
              <div className='mb-3'>
                <label className='form-label'>
                  Food Category
                </label>
                <select className='form-select' value={formData.category} onChange={handleChange} required>
                  <option>Select Category</option>
                  {categories.map((cat)=>(
                    <option key={cat.id} value={cat.id}>{cat.category_name}</option>
                    ))}
                </select>
              </div>

              <div className='mb-3'>
                <label className='form-label'>
                  Food Item Name
                </label>
                <input name='item_name' type='text' className='form-control' value={formData.item_name} onChange={handleChange} placeholder='Enter Food Item Name' required></input>
              </div>

              <div className='mb-3'>
                <label className='form-label'>
                  Description
                </label>
                <textarea name='item_description' className='form-control' value={formData.item_description} onChange={handleChange} placeholder='Enter Food Description' required></textarea>
              </div>

              <div className='mb-3'>
                <label className='form-label'>
                  Quantity
                </label>
                <input name='item_quantity' type='text' className='form-control' value={formData.item_quantity} onChange={handleChange} placeholder='e.g. 2pcs / Large' required></input>
              </div>

              <div className='mb-3'>
                <label className='form-label'>
                  Price (₹)
                </label>
                <input name='item_price' type='number' className='form-control' value={formData.item_price} onChange={handleChange} required></input>
              </div>

              <div className='mb-3'>
                <label className='form-label'>
                  Image
                </label>
                <input name='image' type='file' accept='image/*' className='form-control' onChange={handleFileChange} required></input>
              </div>

              <button type='submit' className='btn btn-primary mt-2'>
                <i className='fas fa-plus me-2'></i>Add Food Item
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-contnet-center align-items-center">
          <i className='fas fa-pizza-slice' style={{fontSize: '180px', color:'#e5e5e5'}}></i>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AddFood