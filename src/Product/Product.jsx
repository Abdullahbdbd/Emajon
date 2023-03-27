import React from 'react';
import './Products.css'

const Product = (props) => {
    const { img, name, seller, ratings, price } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='product-info'>
                <h5 className='product-name'>{name}</h5>
                <p>Price:${price}</p>
                <p>Manufacturer:{seller}</p>
                <p>Ratings:{ratings} Stars</p>
            </div>
            <button className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;