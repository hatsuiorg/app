// TODO: Create a new component to handle the NovelList and NovelCategory

import NovelList from './components/NovelList';
import Search from './components/Search';
import { Container } from './styles';
import novels from '../../../novels.json';
import NovelEntity from '../../database/entities/NovelEntity';
import type { RootBottomTabScreenProps } from '../../navigation/types';

export default function Home({ navigation, route }: RootBottomTabScreenProps<'Home'>) {
  return (
    <Container>
      <Search placeholder="Search for a novel" onSearch={console.log} />
      <NovelList novels={novels as unknown as NovelEntity[]} />
    </Container>
  );
}
