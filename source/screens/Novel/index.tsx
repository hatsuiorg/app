import { ScreenProps } from '../../navigation/types';
import { Container, Header } from '../Updates/styles';

export default function Novel({ navigation, route }: ScreenProps<'Stack:Novel'>) {
  return (
    <Container>
      <Header>Novel</Header>
    </Container>
  );
}
