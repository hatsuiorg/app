import { useEffect, useState } from 'react';
import { Button } from 'react-native';

import NovelEntity from '../../database/entities/NovelEntity';
import useDatabase from '../../hooks/useDatabase';
import { RootBottomTabScreenProps } from '../../navigation/types';
import { Container, Header } from '../Updates/styles';

export default function Library({ navigation, route }: RootBottomTabScreenProps<'Library'>) {
  const { NovelRepository } = useDatabase();
  const [loadedNovels, setLoadedNovels] = useState<NovelEntity[]>([]);

  useEffect(() => {
    async function loadNovels() {
      setLoadedNovels(await NovelRepository.find());
    }

    loadNovels();
  }, []);

  return (
    <Container>
      <Header>Library</Header>
      {loadedNovels.map((novel) => (
        <Button
          key={novel.id}
          onPress={() => navigation.navigate('Novel', novel)}
          title={novel.title}
        />
      ))}
    </Container>
  );
}
