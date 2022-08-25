import styled from 'styled-components';

export const Section = styled.section`
  background: #000;
  padding: 80px 0;

  .container {
    max-width: 1120px;
    margin: 0px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .conteudo {
      flex: 1;
      color: white;
      padding: 20px;
      min-width: 350px;

      h1 {
        font-size: 40px;
        line-height: 50px;
        margin-bottom: 10px;
      }
      p {
        color: #b7b7b7;
        margin-bottom: 30px;
      }

      .contato {
        button {
          margin-right: 30px;
        }
        a {
          color: rgba(255, 98, 0, 1);

          &:hover {
            color: rgba(255, 98, 0, 0.8);
          }
        }
      }
    }

    .imageBotton {
      flex: 1;
      width: 20vw;
      min-width: 350px;
      height: auto;
      object-fit: cover;
      animation: fadeInFadeOut 3s linear infinite;
    }
    @keyframes fadeInFadeOut {
      0% {
           transform: translateX(0%);
          }
      25% {
           transform: translateY(10%);
          }
      50% {
          transform: translateX(-10%);
          }
      100% {
          transform: translateX(0%);
          }
    }
    .imageTop {
      display: none;
      width: 50%;
      animation: fadeInFade 3s linear infinite;
    }
    @keyframes fadeInFade {
           0%{ transform: translateX(0%);}
           25%{ transform: translateX(10%);}
           50%{ transform: translateX(0%);}
           75%{ transform: translateX(-10%);}
           100%{ transform: translateX(0%);}
    }

    @media (max-width: 720px) {
      .conteudo{
        h1{
          text-align: center;
          font-size: 30px;
        }
        p {
          text-align: center;
        }
      }

      .contato {
        text-align: center;
      }

      .imageTop {
        display: block;
      }
      .imageBotton {
        display: none;
      }
    }
  }
}
`;
