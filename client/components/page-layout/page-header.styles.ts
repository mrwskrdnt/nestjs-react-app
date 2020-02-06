import { boxShadow, styled } from 'radiant-ui';

export const Root = styled.header`
  display: flex;
  align-items: center;
  min-height: 70px;
  padding: 15px 30px;
  background-color: ${props => props.theme.backgroundColorForSurface};
  box-shadow: ${props => boxShadow(
    props.theme.colorNeutral900,
    0.125,
    { 
      startY: 0,
      yFact: 4
    }
  )};
 `;

export const title = `
  flex: 1;
  margin: 0 !important;
`;