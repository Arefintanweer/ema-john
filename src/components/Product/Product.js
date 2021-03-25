import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
  return (
    <div className="product">
      <div>
        <img src={props.product.img} alt=""/>
      </div>
      <div>
        <h4>{props.product.name}</h4>
        <br/>
        <p>${props.product.price}</p>
        <button 
          className="main-button"
          onClick={()=>props.handleAddProduct(props.product)}>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          Add to cart</button>
      </div>
      
    </div>
  );
};

export default Product;