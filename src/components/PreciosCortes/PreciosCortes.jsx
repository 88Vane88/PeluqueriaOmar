import { NavBar } from "../navBar/NavBar"
import './PreciosCortes.css'

export const PreciosCortes = () => {
  return (
    <>
    <NavBar/>
    <div className='containerPrecios'>
      <h2 className="tituloPrecios"> Lista de Precios </h2>
      <table className="table1">
        <thead>
          <tr>
            <th colspan='2'className="subTitle"> Cortes y Peinados</th>
          </tr>
          <tr>
            <th>Servicio</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          <tr>
            <th>Servicio1</th>
            <th>$ Precio</th>
          </tr>
          <tr>
            <th>Servicio2</th>
            <th>$ Precio</th>
          </tr>
          <tr>
            <th>Servicio3</th>
            <th>$ Precio</th>
          </tr>
          <tr>
            <th>Servicio4</th>
            <th>$ Precio</th>
          </tr>
          <tr>
            <th>Servicio5</th>
            <th>$ Precio</th>
          </tr>
          <tr>
            <th>Servicio6</th>
            <th>$ Precio</th>
          </tr>
          <tr>
            <th>Servicio7</th>
            <th>$ Precio</th>
          </tr>
          <tr>
            <th>Servicio8</th>
            <th>$ Precio</th>
          </tr>
          <tr>
            <th>Servicio9</th>
            <th>$ Precio</th>
          </tr>
          <tr>
            <th>Servicio10</th>
            <th>$ Precio</th>
          </tr>
          <tr>
            <th>Servicio11</th>
            <th>$ Precio</th>
          </tr>
        </tbody>
      </table>
      <div className='divTable'>
      <table className="table1">
        <thead>
          <tr>
            <th colspan='2'className="subTitle"> Tratamientos </th>
          </tr>
          <tr >
            <th>Servicio</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          <tr>
            <th>Servicio1</th>
            <th>$ Precio</th>
          </tr>
          <tr>
            <th>Servicio2</th>
            <th>$ Precio</th>
          </tr>
          <tr>
            <th>Servicio3</th>
            <th>$ Precio</th>
          </tr>
          <tr>
            <th>Servicio4</th>
            <th>$ Precio</th>
          </tr>
          <tr>
            <th>Servicio5</th>
            <th>$ Precio</th>
          </tr>
          <tr>
            <th>Servicio6</th>
            <th>$ Precio</th>
          </tr>
        </tbody>
      </table>
      </div>
      <div className='divTable'>
      <table className="table1">
        <thead>
          <tr>
            <th colspan='2'className="subTitle"> Lavado </th>
          </tr>
          <tr >
            <th>Servicio</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          <tr>
            <th>Servicio1</th>
            <th>$ Precio</th>
          </tr>
          <tr>
            <th>Servicio2</th>
            <th>$ Precio</th>
          </tr>
          <tr>
            <th>Servicio3</th>
            <th>$ Precio</th>
          </tr>
        </tbody>
      </table>
      </div>
      <div className='divTable'>
      <table className="table1">
        <thead>
          <tr>
            <th colspan='2'className="subTitle"> Color </th>
          </tr>
          <tr >
            <th>Servicio</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          <tr>
            <th>Servicio1</th>
            <th> $ Precio</th>
          </tr>
          <tr>
            <th>Servicio2</th>
            <th> $ Precio</th>
          </tr>
          <tr>
            <th>Servicio3</th>
            <th> $ Precio</th>
          </tr>
          <tr>
            <th>Servicio4</th>
            <th> $ Precio</th>
          </tr>
          <tr>
            <th>Servicio5</th>
            <th> $ Precio</th>
          </tr>
          <tr>
            <th>Servicio6</th>
            <th> $ Precio</th>
          </tr> 
        </tbody>
      </table>
      <br/>
      </div>
    </div>
    </>
  )
}


