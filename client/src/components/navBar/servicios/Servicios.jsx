import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom'
import './Servicios.css'
import { PreciosCortes } from '../../PreciosCortes/PreciosCortes';

export const Servicios=()=> {
  return (
    <>
    <section className='sectionServicios'>
      <div className='contenedorServicios'>
          <div>
            <img className='imagenServicios' src='https://us.123rf.com/450wm/sofiazhuravets/sofiazhuravets2106/sofiazhuravets210600003/170953973-retrato-de-mujer-de-perfil-modelo-rubia-joven-con-cabello-de-longitud-media-belleza-elegancia.jpg?ver=6' alt='peluqueria'/>
          </div>
        <div className='box-1-servicios'>
            <h2 className='tituloServicios'> Servicios: </h2>
            <Accordion /* className='mt-5 p-3' */>
              <Accordion.Item eventKey="0" className='item'>
                <Accordion.Header >Cortes</Accordion.Header>
                  <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              <Accordion.Item eventKey="1" className='item'>
              <Accordion.Header>Peinados</Accordion.Header>
                  <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className='item'>
        <Accordion.Header>Tratamientos</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className='item'>
        <Accordion.Header>Color</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    
    </div>
    <button className='buttonServicios'>
      <Link to={'/prices'} className='linkPrices'>
        Lista de Precios
      </Link>     
    </button>
    </section>
    
    </>
  );
}

