import styled from 'styled-components';
export const Section = styled.section`
  margin-bottom: 20px;
    .curso{
          p{
            margin-top: 10px;
            color: #CCC;
          }
          .periodo{
            font-size: 0.8rem;
            color: #CCC;
            display: flex;
            justify-content: ${({ porcent, periodo }) =>
              porcent && !periodo ? 'flex-end' : 'space-between'};

            .porcentagem{
              color: white;
              font-size: 1.5rem;
            }

          }

          .progresso{
            height: 13px;
            border-radius: 5px;
            background: var(--GradientBorrado);

              .porcentConclusao{
                  height: 100%;
                  width: ${({ porcent }) => porcent}%;
                  border-radius: 5px;
                  background: var(--Gradient);
                  }
            }
      }

      

`;
