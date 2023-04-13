import { Link } from 'react-router-dom'
import { useState } from 'react'
import { TotalItemsCart } from '../buy/TotalItemsCart'
import { useContext } from "react"
import { dataContext } from "../dataProducts/DataProducts"
import './NavBar.css'
import ReorderIcon from '@mui/icons-material/Reorder';

/* import {FaBars, FaTimes} from "react-icons/fa"; */

export const NavBar = () => {
  const {cart, setCart}=useContext(dataContext)
  const [showLinks, setShowLinks] = useState(false)

  return (
      <nav className='navbar'>
        <div className='leftSide'>
          <Link  to={'/'} className= 'logo'>
          <div >Salón Omar</div>
          <div >Peluquería</div>
          </Link>
        </div>
        <div className='rightSide'>
          <div className='linksTo' id={showLinks ? 'hidden': ''}>
            <a className='about' href= '#about' >Nosotros</a>
            <a className='maps' href= '#ubi'>Ubicación</a>
            <Link className='products' to={'/products'}>Productos</Link>
            <Link className='loginUser' to={'/login'}>Registrarse</Link>
          </div>
            <a className='whatsapp' target='_blank' href='https://api.whatsapp.com/send?phone=1568298132&text=BIENVENID@'>
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
            <a className='instagram' target='_blank' href='https://www.instagram.com/salon.omar/?hl=es'>
            <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <Link className='seeCarrito' to={'/buy'}>
            🛒
          {
            cart.length >0
            ? <TotalItemsCart/>
            :null
          }
          </Link>
        </div>
        <button className='buttonOpen' onClick={()=>setShowLinks(!showLinks)}>
         <ReorderIcon/>
        </button>
      </nav>

  )
}


