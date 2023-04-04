import { CarouselBanner } from "../carousel/CarouselBanner"
import { Ubicacion } from "../infoMaps/Ubicacion"
import { NavBar } from "../navBar/NavBar"
import {About} from "../navBar/about/About"
import { Servicios } from "../navBar/servicios/Servicios"
import './Home.css'



export const Home = () => {
  return (
    <div className='home'>
      <NavBar/>
      <CarouselBanner/>
      <About/>
      <Servicios/>
      <div className="contenedorMaps">
        <h2 className="tituloMaps"> ¿Donde estámos?</h2>
      <div className="md:basis-1/2">
          <iframe
            width="70%"
            height="400"
            id="gmap_pelu_omar"
            src="https://maps.google.com/maps?q=Avenida%20Ada%20Elflein%204045&t=&z=15&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
        <Ubicacion/>
        </div>
    </div>
  )
}


