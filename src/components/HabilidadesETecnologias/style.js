import styled, { css } from 'styled-components';

export const Section = styled.section`
    background: black;
    padding: 50px 0;
    h1{
      text-align: center;
      font-size: 40px;
      color: white;
      margin-bottom: 20px;
    }

    .container{
      max-width: 1120px;
      margin: 0px auto;
      color: white;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      padding: 20px;

      .buttons{
        display: flex;
        flex-direction: column;
        margin-right: 30px;

         div{
          display: flex;

          .traco{
            background: rgba(255, 98, 0, 1);
            width: 4px;
            margin-right: 3px;
          }
          button{
            background: linear-gradient(144deg,rgba(255, 98, 0, 0.5) 7%,rgba(55, 70, 227, 0.5) 100%);
            width: 200px;
            height: 40px;
            color: white;
            border-radius: 8px;
          }

          ${({ active }) =>
            active.frontEnd &&
            css`
          .buttonGraduacao{
            background: linear-gradient(144deg,rgba(255, 98, 0, 1) 7%,rgba(55, 70, 227, 1) 100%);
          }`}

          ${({ active }) =>
            active.backEnd &&
            css`
          .buttonCursos{
            background: linear-gradient(144deg,rgba(255, 98, 0, 1) 7%,rgba(55, 70, 227, 1) 100%);
          }`}

          ${({ active }) =>
            active.experiencia &&
            css`
          .buttonExperiencia{
            background: linear-gradient(144deg,rgba(255, 98, 0, 1) 7%,rgba(55, 70, 227, 1) 100%);
          }`}
        }


      }


      .conteudo{
        flex: 1;
        min-width: 300px;
        padding: 0px 30px;

        .frontEnd{
          margin-bottom: 15px;
          .periodo{
            font-size: 0.8rem;
            color: #CCC;
            display: flex;
            justify-content: flex-end;

            .porcentagem{
              color: white;
              font-size: 1.5rem;
            }
          }
          .progresso{
            height: 13px;
            border-radius: 5px;
            background: linear-gradient(144deg,rgba(255, 98, 0, 0.5) 7%,rgba(55, 70, 227, 0.5) 100%);

            .porcentConclusaoHtmlCSS{
              height: 100%;
              width: 80%;
              border-radius: 5px;
              background: linear-gradient(144deg,rgba(255, 98, 0, 1) 7%,rgba(55, 70, 227, 1) 100%);
            }

            .porcentConclusaoJs{
              height: 100%;
              width: 80%;
              border-radius: 5px;
              background: linear-gradient(144deg,rgba(255, 98, 0, 1) 7%,rgba(55, 70, 227, 1) 100%);
            }

            .porcentConclusaoTs{
              height: 100%;
              width: 35%;
              border-radius: 5px;
              background: linear-gradient(144deg,rgba(255, 98, 0, 1) 7%,rgba(55, 70, 227, 1) 100%);
            }

            .porcentConclusaoSass{
              height: 100%;
              width: 90%;
              border-radius: 5px;
              background: linear-gradient(144deg,rgba(255, 98, 0, 1) 7%,rgba(55, 70, 227, 1) 100%);
            }

            .porcentConclusaoGitGitHub{
              height: 100%;
              width: 95%;
              border-radius: 5px;
              background: linear-gradient(144deg,rgba(255, 98, 0, 1) 7%,rgba(55, 70, 227, 1) 100%);
            }

            .porcentConclusaoReactJs{
              height: 100%;
              width: 70%;
              border-radius: 5px;
              background: linear-gradient(144deg,rgba(255, 98, 0, 1) 7%,rgba(55, 70, 227, 1) 100%);
            }

            .porcentConclusaoNextJs{
              height: 100%;
              width: 60%;
              border-radius: 5px;
              background: linear-gradient(144deg,rgba(255, 98, 0, 1) 7%,rgba(55, 70, 227, 1) 100%);
            }
          }
        }

        .backEnd{
          margin-bottom: 20px;

          .periodo{
            font-size: 0.8rem;
            color: #CCC;
            display: flex;
            justify-content: flex-end;

            .porcentagem{
              color: white;
              font-size: 1.5rem;
            }
          }
          .progresso{
            height: 13px;
            border-radius: 5px;
            background: linear-gradient(144deg,rgba(255, 98, 0, 0.5) 7%,rgba(55, 70, 227, 0.5) 100%);

            .porcentConclusaoMongoDB{
              height: 100%;
              width: 40%;
              border-radius: 5px;
              background: linear-gradient(144deg,rgba(255, 98, 0, 1) 7%,rgba(55, 70, 227, 1) 100%);
            }

            .porcentConclusaoFireBase{
              height: 100%;
              width: 50%;
              border-radius: 5px;
              background: linear-gradient(144deg,rgba(255, 98, 0, 1) 7%,rgba(55, 70, 227, 1) 100%);
            }
          }
        }



    }
    @media (max-width: 600px) {
        .buttons{
            margin: 0 auto;
          }
        .buttons div button{
            width: 350px;
          }
        .conteudo{
          margin: 30px 0;
        }
        }



`;
