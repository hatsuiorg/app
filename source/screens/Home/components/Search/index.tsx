// TODO: Add behavior to close keyboard when user click outside of the input.
// TODO: Add a close button to clear the input.

import type { NativeSyntheticEvent, TextInputSubmitEditingEventData } from 'react-native';

import { SearchContainer, SearchIcon, SearchInput } from './styles';

interface SearchProps {
  placeholder: string;
  onSearch: (search: string) => void;
}

export default function Search({ placeholder, onSearch }: SearchProps) {
  function handleOnSubmitEditing(e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) {
    if (e.nativeEvent.text) {
      onSearch(e.nativeEvent.text);
    }
  }

  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput onSubmitEditing={handleOnSubmitEditing} placeholder={placeholder} />
    </SearchContainer>
  );
}
