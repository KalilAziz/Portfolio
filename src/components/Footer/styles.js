import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: rgb(0, 0, 0);
  color: white;
  padding: 30px 0;
  border: 1px solid rgba(141, 141, 141, 0.5);

  .container{
    max-width: 1120px;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .conteudo{
      flex: 1;
      max-width: 400px;
      min-width: 300px;

      h1{
        margin-bottom: 10px;
      }

      p{
        color: #CCC;
        margin-bottom: 20px;
      }

      .redesSociais{
        font-size: 40px;

        i{
          margin-right: 10px;
        }
      }
    }
    .contato{
      flex: 1;
      max-width: 400px;
      min-width: 300px;
      display: flex;

      ul li{
        list-style: none;
        color: #CCC;
      }

      .paginas{
        flex: 1;
        h3{
          margin-bottom: 10px;
        }
      }
      .contatos{
        flex: 1;
        h3{
          margin-bottom: 10px;
        }
      }
      .servico{
        flex: 1;
        h3{
          margin-bottom: 10px;
        }
      }
    }
  }

  @media (max-width: 720px) {
    .container{
      justify-content: center;

      .conteudo{
        margin-bottom: 40px;

        h1, p{
          text-align: center;
        }



        .redesSociais{
          text-align: center;
        }
      }
    }
  }
`;
