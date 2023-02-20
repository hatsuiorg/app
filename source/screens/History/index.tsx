import { RootBottomTabScreenProps } from '../../navigation/types';
import { Container, Header } from '../Updates/styles';

export default function History({ navigation, route }: RootBottomTabScreenProps<'History'>) {
  return (
    <Container>
      <Header>History</Header>
    </Container>
  );
}
