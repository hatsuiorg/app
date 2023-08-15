import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.shades[0]};
`;

export const Header = styled.Text`
  font-weight: bold;
  font-size: 24px;

  color: ${({ theme }) => theme.shades[900]};
`;
