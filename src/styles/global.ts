import { createGlobalStyle } from "styled-components";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0; 
    -web-font-smoothing: 'antialiased';
  }

  @media screen and (max-width: 768px) {
  html {
    font-size: 93.75%;
  }
}


  body, input, textarea, button {
   font-family: ${roboto.style.fontFamily}, sans-serif;
   font-size: ${(props) => props.theme.fontSize.XXS};

  }

  button {
    cursor: pointer;

    border: 0;

    background-color: transparent;
  }

  [disabled] {
    cursor: not-allowed;
  }
`;
