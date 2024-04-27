import Carousel from "react-bootstrap/Carousel";
import ImgCarrusel1 from "../assets/images/cake_carrusel1.jpg";
import ImgCarrusel2 from "../assets/images/cake_carrusel2.jpg";
import ImgCarrusel3 from "../assets/images/img_carrusel3.jpg";
function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={ImgCarrusel1} className="d-block w-100" alt="First slide" />
        <Carousel.Caption>
          <h3>Pastel de limón</h3>
          <p>Masa de galleta de coco y limon sutil y jengibre</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ImgCarrusel2} className="d-block w-100" alt="Second slide" />
        <Carousel.Caption>
          <h3>Kuchën de crema</h3>
          <p>
            Tipico kuchën aleman de crema base de galletas y fruta de la
            estación
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ImgCarrusel3} className="d-block w-100" alt="Second slide" />
        <Carousel.Caption>
          <h3>Ensaladas</h3>
          <p>Tenemos tambien ricas opciones para almuerzo</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;
