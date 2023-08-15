import { ScreenProps } from '../../navigation/types';
import { Container, Header } from '../Updates/styles';

export default function Updates({ navigation, route }: ScreenProps<'Tab:Updates'>) {
  return (
    <Container>
      <Header>Updates</Header>
    </Container>
  );
}
