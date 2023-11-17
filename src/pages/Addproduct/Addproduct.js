import React, { useState } from 'react'
import './addproduct.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Addproduct = () => {
const navigate = useNavigate()

    //First Approach start

    // const [productImages, setProductImages] = useState("")
    // const [productName, setProductName] = useState("")
    // const [productMaterial, setProductMaterial] = useState("")
    // const [productDescription, setProductDescription] = useState("")
    // console.log(productImages)

    // const addProduct = async (e) => {
    //     e.preventDefault()
    //     const response = await axios.post("https://654209ecf0b8287df1ff60c3.mockapi.io/products", {
    //         productImages: productImages,
    //         productName: productName,
    //         productMaterial: productMaterial,
    //         productDescription: productDescription
    //     })

    //     console.log(response)
    // }

    //First approach end


    //Second approach start
    //note: input field name should be same with database or backend productname
    // const addProduct = async(e)=>{
    //     e.preventDefault();
    //     const formData = new FormData(e.currentTarget);
    //     const data = Object.fromEntries(formData)
    //     // console.log(data)
    //   const response = await axios.post("https://654209ecf0b8287df1ff60c3.mockapi.io/products", data)
    //   console.log(response)
    //}


    //Third approach start
const [data,setData]=useState({
    productImages: "",
    productName: "",
    productMaterial: "",
    productDescription: ""
})

const handleChange =(e)=>{
    const {name,value}= e.target 
    setData({
        ...data,
        [name] : value
    })

}
const addProduct = async(e)=>{
    e.preventDefault();
    const response = await axios.post("https://654209ecf0b8287df1ff60c3.mockapi.io/products", data)
    // console.log(response)
    if(response.status == 201){
        navigate("/product")
    }else{
        alert("Something went wrong.Try again")
    }
}
// third approach end

    return (
        <>
            <div class="form-container">
                <h1>Add Product</h1>
                <form action="" onSubmit={addProduct}>
                    {/* first Approach */}

                    {/* <div class="form-group">
                        <label className="form-label" htmlFor="productImages">Product Image:</label>
                        <input className="form-input" type="text" id="productImages" name="productImages" placeholder="Enter product image URL" onChange={(e) => setProductImages(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="productName">Product Name:</label>
                        <input className="form-input" type="text" id="productName" name="productName" placeholder="Enter product Name" onChange={(e) => setProductName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="productMaterial">Product Material:</label>
                        <input className="form-input" type="text" id="productMaterial" name="productMaterial" placeholder="Enter product Material" onChange={(e) => setProductMaterial(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="productDescription">Product Description:</label>
                        <textarea clclassNameass="form-input" id="productDescription" name="productDescription" rows="4" placeholder="Enter product description" onChange={(e) => setProductDescription(e.target.value)}></textarea>
                    </div> */}


                    {/* second approach */}
                    {/* <div class="form-group">
                        <label className="form-label" htmlFor="productImages">Product Image:</label>
                        <input className="form-input" type="text" id="productImages" name="productImages" placeholder="Enter product image URL" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="productName">Product Name:</label>
                        <input className="form-input" type="text" id="productName" name="productName" placeholder="Enter product Name" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="productMaterial">Product Material:</label>
                        <input className="form-input" type="text" id="productMaterial" name="productMaterial" placeholder="Enter product Material" />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="productDescription">Product Description:</label>
                        <textarea clclassNameass="form-input" id="productDescription" name="productDescription" rows="4" placeholder="Enter product description" ></textarea>
                    </div> */}


                    {/* third approach */}
                    <div class="form-group">
                        <label className="form-label" htmlFor="productImages">Product Image:</label>
                        <input className="form-input" type="text" id="productImages" name="productImages" placeholder="Enter product image URL" onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="productName">Product Name:</label>
                        <input className="form-input" type="text" id="productName" name="productName" placeholder="Enter product Name" onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="productMaterial">Product Material:</label>
                        <input className="form-input" type="text" id="productMaterial" name="productMaterial" placeholder="Enter product Material" onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="productDescription">Product Description:</label>
                        <textarea clclassNameass="form-input" id="productDescription" name="productDescription" rows="4" placeholder="Enter product description" onChange={handleChange}></textarea>
                    </div>
                    <button className="form-button" type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Addproduct

