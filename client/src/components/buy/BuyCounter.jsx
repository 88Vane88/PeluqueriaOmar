import { useContext } from "react"
import { dataContext } from "../dataProducts/DataProducts"
import './BuyElementsUsuario.css'

export const BuyCounter = ({product}) => {
  const {cart, setCart, buyProducts}=useContext(dataContext)

  const decrese=()=>{
    const productRepeat=cart.find((item)=>item.id === product.id)
    productRepeat.quantity !==1 
    && 
    setCart(cart.map((item)=>item.id===product.id 
      ? {...product,quantity:productRepeat.quantity -1}
      : item))
    
  }
  return (
    <div className='cartContent'>
      <p className='counter-button' onClick={decrese}>➖</p>
      <h3 className='counter-button'>{product.quantity}</h3>
      <p className='counter-button' onClick={()=>buyProducts(product)}>➕</p>
    </div>
  )
}


