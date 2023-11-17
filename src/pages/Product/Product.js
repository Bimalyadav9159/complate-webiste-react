import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import './product.scss'
import Buttons from '../../components/button/Buttons';
import { Link } from 'react-router-dom';
const Product = () => {
    const [products, setProducts] = useState([])

    // const fetchProducts = async ()={
    //    await axios.Get("https://654209ecf0b8287df1ff60c3.mockapi.io/products");
    // }
    const fetchProduct = async () => {
        try {
            const response = await fetch('https://654209ecf0b8287df1ff60c3.mockapi.io/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchProduct()
    }, [])
    console.log(products)
    return (
        <>

            <div className="product">


                {products.map((prod) => (
                    <div class="card" key={prod.id}>
                        <img src={prod.productImages} alt="" />
                        <div class="card-content">
                            <div className="card-heading">{prod.productName}</div>
                            <div className="card-description">{prod.productMaterial}</div>
                            <div className="card-description">{prod.productDescription}</div>
                            <Link to={`/singleproduct/${prod.id}`}>
                                <div className="button">
                                    <Buttons>See More</Buttons>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Product
