import { Link } from 'react-router-dom'
import { TotalItemsCart } from '../buy/TotalItemsCart'
import { useContext } from "react"
import { dataContext } from "../dataProducts/DataProducts"
import './NavBar.css'

export const NavBar = () => {
  const {cart, setCart}=useContext(dataContext)

  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <div className='contenedorLogo'>
          <Link  to={'/'}>
          <div className='navbar-logo'>Salón Omar</div>
          <div className='navbar-logo2'>Peluquería</div>
          </Link>
        </div>
      <div className='link-container'>
      <a className='about' href= '#about' >Nosotros</a>
      <a className='maps' href= '#ubi'>Ubicación</a>
      <Link className='products' to={'/products'}>Productos</Link>
      <Link className='loginUser' to={'/login'}>Registrarse</Link>
      <a className='whatsapp' target='_blank' href='https://api.whatsapp.com/send?phone=1568298132&text=BIENVENID@'>
        <ion-icon name="logo-whatsapp"></ion-icon>
      </a>
      <a className='instagram' target='_blank' href='https://www.instagram.com/salon.omar/?hl=es'>
        <ion-icon name="logo-instagram"></ion-icon>
      </a>
      </div>
      <Link className='seeCarrito' to={'/buy'}>
        🛒
        {
          cart.length >0
          ? <TotalItemsCart/>
          :null
        }
      </Link>
      </nav>
    </div>
  )
}


