import styled from 'styled-components/native';

export const Container = styled.ImageBackground.attrs({
  blurRadius: 4,
  borderRadius: 12,
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  margin: 0 8px;
  padding: 16px;
  width: 350px;
  opacity: 0.75;
`;

export const TextContainer = styled.View.attrs({
  flex: 1,
  display: 'flex',
  marginRight: 10,
})``;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.shades[900]};
`;

export const Chapters = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.shades[600]};
`;
