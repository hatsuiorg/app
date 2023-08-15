import { Container, Header } from './styles';
import type { ScreenProps } from '../../navigation/types';

export default function Chapter({ navigation, route }: ScreenProps<'Stack:Chapter'>) {
  return (
    <Container>
      <Header>Chapter</Header>
    </Container>
  );
}
