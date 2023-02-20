import { RootBottomTabScreenProps } from '../../navigation/types';
import { Container, Header } from '../Updates/styles';

export default function Settings({ navigation, route }: RootBottomTabScreenProps<'Settings'>) {
  return (
    <Container>
      <Header>Settings</Header>
    </Container>
  );
}
