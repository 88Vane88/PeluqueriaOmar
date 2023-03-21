import Carousel from 'react-bootstrap/Carousel';
import './CarouselBanner.css'


export function CarouselBanner() {
  return (
    <>
    <Carousel>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://irp-cdn.multiscreensite.com/fc0d14ec/MOBILE/jpg/930863-banner.w1900.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <div >
          <h3 className='divCarousel'>Nuestra Sucursal</h3>
          <p className='pCarousel'>
             ¡¡Vení a conocernos!!
          </p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://irp-cdn.multiscreensite.com/fc0d14ec/MOBILE/jpg/930863-banner.w1900.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <div>
          <h3 className='divCarousel'>Cambios de look</h3>
          <p className='pCarousel'>Te ofrecemos los mejores servicios. <br/> Mandanos un whatsapp o llamanos y reservá tu turno</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://irp-cdn.multiscreensite.com/fc0d14ec/MOBILE/jpg/930863-banner.w1900.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <div>
        <h3 className='divCarousel'>Comprá los mejores productos</h3>
          <p className='pCarousel'>Encontrá el producto que más te guste. Seleccionalo. <br/> Agregalo a tu carrito de compras. <br/>Pagalo y pasalo a buscar por la peluquería</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

