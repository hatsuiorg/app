import { ScreenProps } from '../../navigation/types';
import { Container, Header } from '../Updates/styles';

export default function History({ navigation, route }: ScreenProps<'Tab:History'>) {
  return (
    <Container>
      <Header>History</Header>
    </Container>
  );
}
