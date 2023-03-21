import { useContext } from "react"
import { dataContext } from "../dataProducts/DataProducts"
import { BuyCounter } from "./BuyCounter"
import './BuyElementsUsuario.css'

export const BuyElementsUsuario = () => {

const {cart, setCart}=useContext(dataContext)

const deleteProduct=(id)=>{
  const foundId= cart.find((el)=>el.id=== id);
  const newCart= cart.filter((el)=>{
    return el !==foundId
  })
  setCart(newCart)
}

  return cart.map((product)=>{
    return(
      <div className='cartContent' key={product.id}>
        <img src={product.img} alt='product-card'/>
        <h3 className='name'>{product.name}</h3>
        <BuyCounter product={product} /* quantity={product.quantity} *//>
        <h4 className='price'> $ {product.price * product.quantity}</h4>
        <h3 className='cart-delete-button' onClick={()=>deleteProduct(product.id)}>❌</h3>
      </div>
    )
  })
}


