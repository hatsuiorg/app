import { RootBottomTabScreenProps } from '../../navigation/types';
import { Container, Header } from '../Updates/styles';

export default function Updates({ navigation, route }: RootBottomTabScreenProps<'Updates'>) {
  return (
    <Container>
      <Header>Updates</Header>
    </Container>
  );
}
