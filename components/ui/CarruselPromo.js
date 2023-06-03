import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Carousel from 'react-bootstrap/Carousel';

const size = {
  mobile: "320px",
  tablet: "768px",
  laptop: "3500px",
  desktop: "7060px",
}
export const mobile = (inner) => css`
  @media (max-width: ${size.mobile}) {
    ${inner};
  }
`;
export const tablet= (inner) => css`
  @media (max-width: ${size.tablet})and (min-width:${size.mobile}) {
    ${inner};
  }
`;
export const laptop= (inner) => css`
  @media (max-width: ${size.laptop}) and (min-width:${size.tablet}) {
    ${inner};
  }
`;

export const desktop= (inner) => css`
  @media (max-width: ${size.desktop}) and (min-width:${size.laptop}) {
    ${inner};
  }
`;

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
   width: 50%;
   margin-top: 1%;
   `)};

   ${desktop(css`
   width: 40%;
   margin-top: 1%;
   `)};
`;


function CarruselPromo() {
  return (
    <CarruselContainer>
      <Carousel variant="dark">
        <Carousel.Item>  
            <img
              className="d-block w-100 m-0 " 
              src="/assets/img/promo.jpg"
              alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/img/promo.jpg"
              alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/img/promo.jpg"
              alt="Third slide"
            />
        </Carousel.Item>
      </Carousel>
    </CarruselContainer>
  );
}

export default CarruselPromo;