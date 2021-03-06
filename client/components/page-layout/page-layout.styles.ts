import { boxShadow, styled } from 'radiant-ui';

export const root = `
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
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

export const main = `
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 3rem 30px;
`;