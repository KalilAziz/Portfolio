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
    }

    .imageTop {
      display: none;
      width: 50%;
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
