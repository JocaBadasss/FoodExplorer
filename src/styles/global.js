import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

    :root {
        font-size: 62.5%;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        

    }

    body {
        background: ${({ theme }) => theme.COLORS.DARK_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_300};


        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale; 
    }

    body, input, button, textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        outline: none;
    }

    button,a {
        font-family: 'Poppins', sans-serif;
        font-size: 1.4rem;
         color: ${({ theme }) => theme.COLORS.LIGHT_100};

         cursor: pointer;
         transition: filter 0.2s;
    }

    button:hover, a:hover  {
        filter: brightness(0.9);
    
    }

    a {
        margin-top: 3.2rem;
        text-decoration: none;
    }

    

`
