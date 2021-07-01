import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    background-color: var(--backgroud-color);
  }

  *, input {
    border: 0;
    outline: 0;
  }

  :root {
    --primary-color: #0099FF;
    --primary-color-rgba: rgba(0, 153, 255,.2);
    --white-color: #FFFFFF;
    --red-color: #F84735;
    --red-color-rgba: rgba(248, 71, 53,.2);
    --foreground-color: #274060;
    --foreground-color-disabled: #508AC9;
        
  }
`;