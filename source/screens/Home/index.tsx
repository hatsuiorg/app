import { ScreenProps } from '../../navigation/types';
import { Container, Header } from '../Updates/styles';

export default function Home({ navigation, route }: ScreenProps<'Tab:Home'>) {
  return (
    <Container>
      <Header>Home</Header>
    </Container>
  );
}
