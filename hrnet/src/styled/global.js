import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        background-color: #e9fed3;
    }
`;

export const Label = styled.label`
font-size: 1em;
margin: 10px 0;
font-weight: 400;
display: block; 
`;