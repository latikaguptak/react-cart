import React from 'react'
import { useContext } from 'react'
import { CartContext } from './Context/Cart';

const Cart_item = (props) => {
  const cart = useContext(CartContext);
  // console.log("cart", cart);
  return (
    <>
    <div>Cart_item</div>
    <div className="cart-item">
        <div className="cart-item-info">
            <p className="cart-item-title">Product Name: {props.Name}</p>
            <p className="cart-item-price">Price :{props.Cost}</p>
            <p className="cart-item-quantity">Quantity</p>
            <button className="btn " onClick={()=>{
              cart.setItems([
                ...cart.items,{Product_Name: props.Name, Price: props.Cost}
              ])
            }} >Add to Cart</button>
        </div>
    </div>
    </>
    
  )
}

export default Cart_item