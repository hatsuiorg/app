import { Button } from 'react-native';

import FAKE_NOVELS from '../../data/FakeNovels';
import type { RootBottomTabScreenProps } from '../../navigation/types';
import { Container, Header } from '../Updates/styles';

export default function Library({ navigation, route }: RootBottomTabScreenProps<'Library'>) {
  return (
    <Container>
      <Header>Library</Header>
      <Button onPress={() => navigation.navigate('Novel', FAKE_NOVELS[0])} title="Open Novel" />
    </Container>
  );
}
