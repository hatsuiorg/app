import { GestureResponderEvent, ListRenderItem, View } from 'react-native';

import {
  ActionButton,
  ActionRow,
  ChapterItem,
  VolumesList,
  Container,
  Cover,
  Description,
  InformationText,
  InformationColumn,
  Title,
  SmallText,
  VolumeTitle,
} from './styles';
import type { RootStackScreenProps } from '../../navigation/types';
import type { NovelChapter, NovelVolume } from '../../types/Novel';

export default function Novel({ navigation, route }: RootStackScreenProps<'Novel'>) {
  const { type, title, description, cover, chapters, authorsAndIllustrators } = route.params;

  const chaptersByVolume: NovelVolume[] = chapters.reduce((acc, chapter) => {
    const volume = acc.find((volume) => volume.volumeNumber === chapter.volumeNumber);

    if (volume) {
      volume.chapters.push(chapter);
    } else {
      acc.push({
        id: chapter.id,
        volumeNumber: chapter.volumeNumber ?? -1,
        chapters: [chapter],
      });
    }

    return acc;
  }, [] as NovelVolume[]);

  function handleAddToLibrary() {
    throw new Error('Not implemented');
  }

  function handleDownload() {
    throw new Error('Not implemented');
  }

  function handleFavorite() {
    throw new Error('Not implemented');
  }

  const renderChapterItem: ListRenderItem<NovelChapter> = ({ item }) => {
    function handlePress(_event: GestureResponderEvent) {
      navigation.navigate('Chapter', item);
    }

    return (
      <ChapterItem onPress={handlePress}>
        <Title>{item.title}</Title>
      </ChapterItem>
    );
  };

  const renderVolumeItem: ListRenderItem<NovelVolume> = ({ item }) => {
    return (
      <View>
        {item.volumeNumber !== -1 && <VolumeTitle>Volume {item.volumeNumber}</VolumeTitle>}

        <VolumesList
          data={item.chapters}
          renderItem={renderChapterItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  };

  return (
    <Container>
      <ActionRow>
        <ActionButton name="arrow-left" onPress={() => navigation.goBack()} avoidMargin />

        <ActionRow>
          <ActionButton name="plus" onPress={handleAddToLibrary} />
          <ActionButton name="download" onPress={handleDownload} />
          <ActionButton name="heart" onPress={handleFavorite} />
        </ActionRow>
      </ActionRow>

      <InformationColumn>
        <Cover source={{ uri: cover }} />

        <InformationText>
          <Title>{title}</Title>
          <SmallText>{authorsAndIllustrators.join(', ')}</SmallText>
          <SmallText>{type}</SmallText>
        </InformationText>

        {/* TODO: Make the description collapsible like TachiyomiJ2K. */}
        <Description>{description}</Description>
      </InformationColumn>

      {/* TODO: Add the volumes header with sort and filter settings. */}
      <VolumesList
        data={chaptersByVolume}
        renderItem={renderVolumeItem}
        keyExtractor={(item) => item.id}
      />

      {/* TODO: Add a popover button to the bottom right corner of the screen to
          open the last read chapter or the first chapter of the first volume. */}
    </Container>
  );
}
