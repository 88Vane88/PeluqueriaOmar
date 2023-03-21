import { useContext } from "react"
import { dataContext } from "../dataProducts/DataProducts"
import './BuyElementsUsuario.css'

export const TotalItemsCart = () => {
  const {cart}=useContext(dataContext)

  const itemsCart=cart.reduce((acc, el)=>acc + el.quantity, 0)


  return (
    <span className='cart-item-total'>
      {itemsCart}
    </span>
  )
}


