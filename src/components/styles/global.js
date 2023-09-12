import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-size: 16px;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
    }
    body, html{
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
    }
    button {
        cursor: pointer;
    }
    h1,h2,h3,h4,h5,h6,strong{
        font-weight: 600;
    }
`;
