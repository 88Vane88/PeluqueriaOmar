import { useContext } from "react"
import { dataContext } from "../dataProducts/DataProducts"
import './Products.css'

export const Products = () => {
  const {data, buyProducts}= useContext(dataContext)

  /* setCart([...cart,product]) */


  return (
    <div className='gallery'>
      {
      data.map((product)=>{
        return (
          <div className='content' key={product.id}>
            <img className='productsImg'src={product.img} alt='producto'/>
            <h3>{product.name}</h3>
            <h5>$ {product.price}</h5>
            <button className='buy' onClick={()=>buyProducts(product)}>Comprar</button>
          </div>
        )
      })
      }
    </div>
  )
}


