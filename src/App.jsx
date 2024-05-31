
import './App.css'
import Cart_item from './components/Cart_item'
// import { CartContext } from './components/Context/Cart';
import Cart from './components/Cart';
function App() {
  

  return (
    <>
    <Cart_item Name="Apple-Pro" Cost="10000" />
    <Cart_item Name="Samsung" Cost="8000" />
    <Cart_item Name="Nokia" Cost= "7000"/>
    <Cart_item Name="Motorola" Cost="2000"/>
    <Cart/>
   </>
  )
}

export default App
