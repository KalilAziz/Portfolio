import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }
  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}

body{
  -webkt-font-smoothing: antialiased;
}

button{
  cursor: pointer;
}

body, input, textarea, select, button{
  font: 400 1em 'Roboto', sans-serif;
}

a{
  color: inherit;
  text-decoration: none;
}
`;