import { styled } from 'radiant-ui';

export const root = `
  display: flex;
  align-items: center;
  padding: 24px 30px;
  
  &:not(:last-of-type) {
    margin-bottom: 24px;
  }
 `;

export const name = `
  flex: 1 15%;
  margin: 0 30px 0 0 !important;
`;

export const Kind = styled.span`
  flex: 1 60%;
  color: ${props => props.theme.colorAccent400};
  margin-right: 15px;
`;