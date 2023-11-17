import React, { useEffect, useState } from 'react'
import './singleProduct.scss'
import Buttons from '../../components/button/Buttons'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const SingleProduct = () => {
    const {id} = useParams()
    const navigate = useNavigate()
//    const fetchSingleProduct = async()=>{
//     const response = await axios.get('https://654209ecf0b8287df1ff60c3.mockapi.io/products' + id)
// console.log(response)
//    }

//storing single product from coming object
const[product, setProduct] = useState({})

//deleting single product
 const deleteProduct = async()=>{
    const response = await axios.delete("https://654209ecf0b8287df1ff60c3.mockapi.io/products/" + id)
    if(response.status == 200){
        navigate("/product")
    }else{
    alert("Something went wrong. Try again!")
    }
}

//featch single data 
const fetchSingleProduct = async (id) => {
    try {
        const response = await fetch(`https://654209ecf0b8287df1ff60c3.mockapi.io/products/${id}`);
        const data = await response.json();
        setProduct(data)        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

useEffect(() => {
    fetchSingleProduct(id);
}, [id]);
    return (
        <div>
            <h1>Single Product</h1>
            <div className="product">
                <div class="card" >
                    <img src={product.productImages} alt="" />
                    <div class="card-content">
                        <div className="card-heading">{product.productName}</div>
                        <div className="card-description">{product.productMaterial}</div>
                        <div className="card-description">{product.productDescription}</div>                        
                      <button onClick={deleteProduct}>Delete </button>
                        <button onClick={()=>navigate(`/editProduct/${product.id}`)}>Edit</button>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SingleProduct
