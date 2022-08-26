import styled from 'styled-components';
export const Div = styled.div`
  background-color: #0B0B0E;
  flex: 1;
  min-width: 300px;
  margin: 20px;

  img{
    width: 100%;
  }
  .conteudo{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    span{
      margin: 20px 0 ;
    }

    button{
      width: 80%;
      border-radius: 5px;
    }
  }

`;
