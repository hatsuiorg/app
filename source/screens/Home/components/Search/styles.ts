import Feather from '@expo/vector-icons/Feather';
import styled from 'styled-components/native';

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 10px 15px;
  border-radius: 15px;

  background-color: ${({ theme }) => theme.shades[100]};
`;

export const SearchIcon = styled(Feather).attrs((props) => ({
  size: 20,
  name: 'search',
  color: props.theme.shades[300],
}))``;

export const SearchInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.shades[300],
  selectionColor: props.theme.primary,
}))`
  flex: 1;
  font-size: 14px;
  margin-left: 10px;

  font-size: 16px;
  color: ${({ theme }) => theme.shades[600]};
`;
