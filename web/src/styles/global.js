import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  *{
    margin:0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus{
    outline:0;
  }
  html, body, #root{
    height:100%;
    background: linear-gradient(-90deg, #00a2e5, #5ab99b)
  }
  body{
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }


  button{
     cursor: pointer;
  }

`;
