import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.shades[0]};

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 15px;
`;
