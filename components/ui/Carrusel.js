import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Carousel from 'react-bootstrap/Carousel';
import { desktop, laptop, mobile, tablet } from '../../helpers/mediaQuerys';



const CarruselContainer = styled.div`

   ${mobile(css`
    width: 93%;
    margin-top: 2%;
   `)};

   ${tablet(css`
   width: 93%;
   margin-top: 2%;
   `)};

   ${laptop(css`
   width: 70%;
   margin-top: 1%;
   `)};

   ${desktop(css`
   width: 70%;
   margin-top: 1%;
   `)};
`;


function Carrusel() {
  return (
    <CarruselContainer >
      <Carousel variant="dark">
        <Carousel.Item>  
            <img
              className="d-block w-100 m-0 " 
              src="/assets/img/sucursal1.jpg"
              alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/img/sucursal1.jpg"
              alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/img/sucursal1.jpg"
              alt="Third slide"
            />
        </Carousel.Item>
      </Carousel>
    </CarruselContainer>
  );
}

export default Carrusel;