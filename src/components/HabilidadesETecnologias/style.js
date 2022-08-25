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
            background: var(--Gradient);
          }`}

          ${({ active }) =>
            active.backEnd &&
            css`
          .buttonCursos{
            background: var(--Gradient);
          }`}

          ${({ active }) =>
            active.experiencia &&
            css`
          .buttonExperiencia{
            background: var(--Gradient);
          }`}
        }


      }

      .conteudo{
        flex: 1;
        min-width: 300px;
        padding: 0px 30px;
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
