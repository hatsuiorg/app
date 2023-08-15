import { ScreenProps } from '../../navigation/types';
import { Container, Header } from '../Updates/styles';

export default function Library({ navigation, route }: ScreenProps<'Tab:Library'>) {
  return (
    <Container>
      <Header>Library</Header>
    </Container>
  );
}
