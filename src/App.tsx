import { ChangeEventHandler, useState } from 'react';

import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react';

import { AddPostModal } from './components/AddPostModal';
import { Orderedlist } from './components/Orderedlist';
import { SearchBar } from './components/SearchBar';
import ThemeToggleButton from './components/ThemeToggleButton';

function App() {
  const [searchText, setSearchText] = useState('');
  const handleChangeSearchText: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setSearchText(value);
  };

  return (
    <Stack gap={4} p={8}>
      <SearchBar
        searchText={searchText}
        onChangeSearchText={handleChangeSearchText}
      />
      <Orderedlist searchText={searchText} />
      <ThemeToggleButton pos="fixed" bottom="2" right="2" />
      <AddPostModal />
    </Stack>
  );
}

export default App;
