// TODO: Add a lightly shadowed background container of

import { FlatList, Image, ListRenderItemInfo } from 'react-native';

import { Chapters, Container, TextContainer, Title } from './styles';
import type NovelEntity from '../../../../database/entities/NovelEntity';

interface NovelListProps {
  novels: NovelEntity[];
}

export default function NovelList({ novels }: NovelListProps) {
  function renderItem({ item }: ListRenderItemInfo<NovelEntity>) {
    return (
      <Container source={{ uri: item.cover.toString() }}>
        <TextContainer>
          <Title numberOfLines={1}>{item.title}</Title>
          <Chapters>{item.chapters.length} Chapter(s)</Chapters>
        </TextContainer>

        <Image
          resizeMethod="scale"
          borderRadius={8}
          source={{
            uri: item.cover.toString(),
            width: 100,
            height: 150,
          }}
        />
      </Container>
    );
  }

  return (
    <FlatList
      horizontal
      data={novels}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={{
        marginHorizontal: -4,
        marginVertical: 15,
      }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: 8,
      }}
    />
  );
}
