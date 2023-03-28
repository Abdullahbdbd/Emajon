import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'

const Product = (props) => {
    const { img, name, seller, ratings, price } = props.product;
    const handleAddToCart = props.handleAddToCart

    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='product-info'>
                <h5 className='product-name'>{name}</h5>
                <p>Price:${price}</p>
                <p>Manufacturer:{seller}</p>
                <p>Ratings:{ratings} Stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                Add To Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;