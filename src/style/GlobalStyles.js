import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    ${reset}
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
    input {
        border: 0;
        background: transparent;
    }

    :root {
        --color-navy: #132644;
        --color-lime: #E1FF67;
        --color-blue: #1643DB;
        --color-steelblue: #5472A1;
        --color-maingrey: #C4C4C4;
        --color-darkgrey: #767676;
        --color-lightgrey: #DBDBDB;
        --color-red: #EB5757;
        --color-bg: #F2F2F2;
    }
`;

export default GlobalStyles;
