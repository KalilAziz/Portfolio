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
            active.graduacao &&
            css`
          .buttonGraduacao{
            background: linear-gradient(144deg,rgba(255, 98, 0, 1) 7%,rgba(55, 70, 227, 1) 100%);
          }`}

          ${({ active }) =>
            active.cursos &&
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
      @media (max-width: 600px) {
        .buttons{
            margin-bottom: 20px;
          }
        .buttons div button{
            width: 350px;
          }
        }

      .conteudo{
        flex: 1;
        min-width: 300px;
        padding: 0px 30px;

        .graduacao{
          p{
            margin-top: 10px;
            color: #CCC;
          }
          .periodo{
            font-size: 0.8rem;
            color: #CCC;
            display: flex;
            justify-content: space-between;

            .porcentagem{
              color: white;
              font-size: 1.5rem;
            }
          }
          .progresso{
            height: 13px;
            border-radius: 5px;
            background: linear-gradient(144deg,rgba(255, 98, 0, 0.5) 7%,rgba(55, 70, 227, 0.5) 100%);

            .porcentConclusaoGradu{
              height: 100%;
              width: 55%;
              border-radius: 5px;
              background: linear-gradient(144deg,rgba(255, 98, 0, 1) 7%,rgba(55, 70, 227, 1) 100%);
            }
          }
        }

        .cursos{
          margin-bottom: 20px;
          p{
            margin-top: 10px;
            color: #CCC;
          }
          .periodo{
            font-size: 0.8rem;
            color: #CCC;
            display: flex;
            justify-content: space-between;

            .porcentagem{
              color: white;
              font-size: 1.5rem;
            }
          }
          .progresso{
            height: 13px;
            border-radius: 5px;
            background: linear-gradient(144deg,rgba(255, 98, 0, 0.5) 7%,rgba(55, 70, 227, 0.5) 100%);

            .porcentConclusaoB7{
              height: 100%;
              width: 100%;
              border-radius: 5px;
              background: linear-gradient(144deg,rgba(255, 98, 0, 1) 7%,rgba(55, 70, 227, 1) 100%);
            }

            .porcentConclusaoProgBr{
              height: 100%;
              width: 100%;
              border-radius: 5px;
              background: linear-gradient(144deg,rgba(255, 98, 0, 1) 7%,rgba(55, 70, 227, 1) 100%);
            }

            .porcentConclusaoJavaType{
              height: 100%;
              width: 80%;
              border-radius: 5px;
              background: linear-gradient(144deg,rgba(255, 98, 0, 1) 7%,rgba(55, 70, 227, 1) 100%);
            }

            .porcentConclusaoReactNext{
              height: 100%;
              width: 70%;
              border-radius: 5px;
              background: linear-gradient(144deg,rgba(255, 98, 0, 1) 7%,rgba(55, 70, 227, 1) 100%);
            }

          }
        }

        .experiencias{
          p{
            margin-top: 10px;
            color: #CCC;
          }
          .periodo{
            font-size: 0.8rem;
            color: #CCC;
            display: flex;
            justify-content: space-between;
          }
        }

      }
`;
