import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    ${reset}
    body {
        background: var(--color-navy);
    }
    .a11y-hidden {
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
        color: var(--color-navy);
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
        padding: 0;
        margin: 0;
    }
    input {
        border: 0;
        background: transparent;
        margin: 0;
        padding: 0;
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
