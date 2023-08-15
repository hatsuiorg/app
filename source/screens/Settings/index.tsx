import { ScreenProps } from '../../navigation/types';
import { Container, Header } from '../Updates/styles';

export default function Settings({ navigation, route }: ScreenProps<'Tab:Settings'>) {
  return (
    <Container>
      <Header>Settings</Header>
    </Container>
  );
}
