import React, {useContext} from 'react'
import { CartContext } from './Context/Cart'
const cart = () => {
  const cart = useContext(CartContext)
  return (
    <>
    <h2> Cart</h2>
    {
    cart && cart.items.map(item => <li>{item.name}- ${item.price}</li>)}
    <div>
    
    </div>
    </>
  )
}

export default cart