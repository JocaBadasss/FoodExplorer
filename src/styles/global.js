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


* {
  scrollbar-width: thin;
  scrollbar-color: #4D585E #DFE9EB;
}


*::-webkit-scrollbar {
  height: 10px;
  width: 10px;
}
*::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #DFE9EB;
}

*::-webkit-scrollbar-track:hover {
  background-color: #B8C0C2;
}

*::-webkit-scrollbar-track:active {
  background-color: #B8C0C2;
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #4D585E;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #76797B;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #0D1D25;
}

    }

    body, input, button, textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        outline: none;
    }

    .menu-open {
        overflow: hidden;
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
