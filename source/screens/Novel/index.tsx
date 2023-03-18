import { GestureResponderEvent, ListRenderItem, View } from 'react-native';

import {
  ActionButton,
  ActionRow,
  ChapterItem,
  Container,
  Cover,
  Description,
  InformationColumn,
  InformationText,
  SmallText,
  Title,
  VolumesList,
  VolumeTitle,
} from './styles';
import ChapterEntity from '../../database/entities/ChapterEntity';
import type { RootStackScreenProps } from '../../navigation/types';

interface ChapterByVolume {
  volume: number;
  chapters: ChapterEntity[];
}

export default function Novel({ navigation, route }: RootStackScreenProps<'Novel'>) {
  const { kind, title, synopsis, cover, chapters, authors, artists } = route.params;
  const authorsAndIllustrators = [...authors, ...artists];

  const chaptersByVolume = chapters.reduce((acc, chapter) => {
    const volume = acc.find((volume) => {
      return volume.volume === chapter.number;
    });

    if (volume) {
      volume.chapters.push(chapter);
    } else {
      acc.push({
        volume: chapter.number ?? -1,
        chapters: [chapter],
      });
    }

    return acc;
  }, [] as ChapterByVolume[]);

  function handleAddToLibrary() {
    throw new Error('Not implemented');
  }

  function handleDownload() {
    throw new Error('Not implemented');
  }

  function handleFavorite() {
    throw new Error('Not implemented');
  }

  const renderChapterItem: ListRenderItem<ChapterEntity> = ({ item }) => {
    function handlePress(_event: GestureResponderEvent) {
      navigation.navigate('Chapter', item);
    }

    return (
      <ChapterItem onPress={handlePress}>
        <Title>{item.title}</Title>
      </ChapterItem>
    );
  };

  const renderVolumeItem: ListRenderItem<ChapterByVolume> = ({ item }) => {
    return (
      <View>
        {item.volume !== -1 && <VolumeTitle>Volume {item.volume}</VolumeTitle>}

        <VolumesList
          data={item.chapters}
          renderItem={renderChapterItem}
          keyExtractor={(item) => item.id.toString()}
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
        <Cover
          source={{
            uri: `data:image/png;base64,${cover}`,
          }}
        />

        <InformationText>
          <Title>{title}</Title>
          <SmallText>{authorsAndIllustrators.join(', ')}</SmallText>
          <SmallText>{kind}</SmallText>
        </InformationText>

        {/* TODO: Make the description collapsible like TachiyomiJ2K. */}
        <Description>{synopsis}</Description>
      </InformationColumn>

      {/* TODO: Add the volumes header with sort and filter settings. */}
      <VolumesList
        data={chaptersByVolume}
        renderItem={renderVolumeItem}
        keyExtractor={(item) => item.volume.toString()}
      />

      {/* TODO: Add a popover button to the bottom right corner of the screen to
          open the last read chapter or the first chapter of the first volume. */}
    </Container>
  );
}
