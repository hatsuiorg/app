import Feather from '@expo/vector-icons/Feather';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { useTheme } from 'styled-components/native';

export const Container = styled(SafeAreaView)``;

export const ActionRow = styled.View``;

type ButtonWithIconProps = React.ComponentProps<typeof Feather> & {
  avoidMargin?: boolean;
};

export function ActionButton({ avoidMargin = false, ...props }: ButtonWithIconProps) {
  const theme = useTheme();

  return (
    <Feather
      size={20}
      style={{ marginLeft: avoidMargin ? 0 : 20, color: theme.shades[900] }}
      {...props}
    />
  );
}

export const InformationColumn = styled.View``;

export const Cover = styled.Image``;

export const InformationText = styled.View``;

export const Title = styled.Text``;

export const Authors = styled.Text``;

export const SmallText = styled.Text``;

export const Description = styled.Text``;

export const VolumeTitle = styled.Text``;

export const VolumesList = styled.FlatList`` as unknown as typeof FlatList;

export const ChapterItem = styled.TouchableOpacity``;
