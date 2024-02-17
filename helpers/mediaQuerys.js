import { css } from "@emotion/react";

const size = {
    mobile: "600px",
    tablet: "1000px",
    laptop: "1900px",
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

  export const aux = (inner) => css`
  @media (max-width: ${size.laptop}) and (min-width:544px) {
    ${inner};
  }
`;

  export const minAux = (inner) => css`
  @media (min-width:1400px) {
    ${inner};
  }
  `;