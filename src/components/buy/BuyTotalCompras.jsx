import { useContext } from "react"
import { dataContext } from "../dataProducts/DataProducts"
import './BuyElementsUsuario.css'

export const BuyTotalCompras = () => {

  const {cart}=useContext(dataContext)
  const total=cart.reduce((acc, el)=> acc + el.price * el.quantity, 0);

  return (
    <div className='cartTotal'>
      <h3> TOTAL: </h3>
      <h3 className='total'> $ {total} </h3>
    </div>
  )
}


