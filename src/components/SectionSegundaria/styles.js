import styled from 'styled-components';
export const Section = styled.section`
  background: var(--Gradient);
  height: 30vw;
  max-height: 400px;
  min-height: 200px;
  color: white;

  .container {
    max-width: 1120px;
    margin: 0px auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

      h1{
        font-size: 40px;
        margin-bottom: 10px;
      }

      .traco{
        width: 150px;
        border: 2px solid black;
        margin-bottom: 20px;
      }
}

`;
