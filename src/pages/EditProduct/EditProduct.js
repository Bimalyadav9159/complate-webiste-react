import React, { useEffect, useState, } from 'react'
import './editProduct.scss'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
const EditProduct = () => {
  const navigate = useNavigate()
 const {id} = useParams()
  //fetch product of id
  const[product, setProduct] = useState([])
  const handleChange = (e)=>{
    const {name,value} = e.target 
    console.log(name,value)
    setProduct({
        ...product,
        [name] : value
    })
   
}
 // edit product

 const editProduct = async (e)=>{
  e.preventDefault()
  const response = await axios.put("https://654209ecf0b8287df1ff60c3.mockapi.io/products/" + id,product )
  if(response.status == 200){
    navigate("/product")
  }else{
      alert("Something went wrong . Try again")
  }
}


  const fetchProduct = async () => {
    try {
      const response = await axios.get("https://654209ecf0b8287df1ff60c3.mockapi.io/products/");
      setProduct(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);


//   const fetchProduct = async()=>{
//     const response = await axios.get("https://654209ecf0b8287df1ff60c3.mockapi.io/products/")
//     setProduct(response)
//     console.log(response)
//   }

//   useEffect(()=>{
//     fetchProduct()
//   },[])


    
    return (
        <>
            <div class="form-container">
                <h1>Edit Product</h1>
                <form action="" onSubmit={editProduct}>
                    <div class="form-group">
                        <label className="form-label" htmlFor="productImages">Product Image:</label>
                        <input value={product.productImages} className="form-input" type="text"  id="productImages" name="productImages" placeholder="Enter product image URL"  onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="productName">Product Name:</label>
                        <input value={product.productName} className="form-input" type="text"  id="productName" name="productName" placeholder="Enter product Name"  onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="productMaterial">Product Material:</label>
                        <input value={product.productMaterial} className="form-input" type="text"  id="productMaterial" name="productMaterial" placeholder="Enter product Material"  onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="productDescription">Product Description:</label>
                        <textarea value={product.productDescription} clclassNameass="form-input"  id="productDescription" name="productDescription" rows="4" placeholder="Enter product description" onChange={handleChange}></textarea>
                    </div>
                    <button className="form-button" type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default EditProduct
