import { Container, Header } from './styles';
import type { RootStackScreenProps } from '../../navigation/types';

export default function Chapter({ navigation, route }: RootStackScreenProps<'Chapter'>) {
  return (
    <Container>
      <Header>Chapter</Header>
    </Container>
  );
}
