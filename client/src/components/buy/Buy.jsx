import { useContext } from "react"
import { dataContext } from "../dataProducts/DataProducts"
import { BuyElementsUsuario } from "./BuyElementsUsuario"
import { BuyTotalCompras } from "./BuyTotalCompras"
import './BuyElementsUsuario.css'
import { NavBar } from "../navBar/NavBar"

export const Buy = () => {

  const {cart}= useContext(dataContext)


  return (
    <>
    <NavBar/>
    {cart.length>0 ?(
      <>
      <BuyElementsUsuario/>
      <BuyTotalCompras/>
      </>
    ):(
      <h2 className='cart-message-center'> El carrito está vacío</h2>
    )}
    </>
  )
}


