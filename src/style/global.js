import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  --Gradient: linear-gradient(
  144deg,
  rgba(255, 98, 0, 1) 7%,
  rgba(55, 70, 227, 1) 100%
);

  --GradientBorrado: linear-gradient(144deg,rgba(255, 98, 0, 0.5) 7%,rgba(55, 70, 227, 0.5) 100%)
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

.Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Modal {
    flex: 1;
    max-width: 800px;
    background-color:#0b0b0e;
    position: relative;
    color: white;
    }

  .modal-box{
    padding: 20px;

    h2{
      margin-bottom: 20px;
    }

    .icon-close{
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: transparent;
      border: none;
      color: white;
      cursor: pointer;
    }

    .container{


      .projeto{
        display: flex;
        width: 100%;
        margin-bottom: 50px;

        .image{
          flex: 1;

          img{
            width: 100%;
          }

        }
        .conteudo{
          flex: 1;
          margin-left: 20px;

          .desc{
            margin-bottom: 10px;
            p{
              color: #CCC
            }
          }

          .tecnos{

            .tecno{
              display: flex;
              flex-wrap: wrap;
              button{
                color: white;
                flex: 1;
                min-width: 100px;
                padding: 10px;
                margin: 3px;
                border: 1px solid black;
                border-radius: 5px;
                background-color: blue;

              }
            }

          }
        }
      }
      .divugacacao{
        display: flex;
        justify-content: flex-end;
        margin: 0px 20px;

        button{
          padding: 15px;
          border: 1px solid black;
          border-radius: 5px;
        }
      }
  }



`;
