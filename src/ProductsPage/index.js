import React from "react";
import {useState} from 'react'
import './style.css';
import { Link } from "react-router-dom";




const ProductsPage =()=> {

  const [newProduct, setNewProduct] = useState({
      id: "",
      name: "",
      price: "",
      discountPercentage: "",
     
  })

  const {id, name, price, discountPercentage} = newProduct;
  
  console.log(id, name, price, discountPercentage)

 const handleChange =(e)=> {
   setNewProduct({
     ...newProduct,
     [e.target.name]: [e.target.value]
   })
   
 }

  const handleSubmit = async()=> {
    const response = await fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, name, price, discountPercentage
  })
    })
   const result = await response.json()
    console.log(result)
  }
  return (
      
    <div className='add'>
        <h1>ADD NEW PRODUCT</h1>
      <input name='id' value={newProduct.id} type='text' placeholder="Enter product id" onChange={handleChange} />
     
      <input name='name' value={newProduct.title} type='text' placeholder="Enter product name" onChange={handleChange} />
      
      <input name='price' value={newProduct.price} type='text' placeholder="Enter product price" onChange={handleChange} />
      
      <input name='discountPercentage' value={newProduct.discountPercentage} type='text' placeholder="Enter product discount" onChange={handleChange} />
    
     
    
<br/>
<br/>
       <button onClick={handleSubmit}>
         ADD PRODUCT
        </button>
      
      
        <Link to='/products'><button>
          PRODUCTS
        </button>
        </Link>

    </div>
    )
}
  export default ProductsPage;