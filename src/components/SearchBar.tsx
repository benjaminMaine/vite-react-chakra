import { ChangeEventHandler, useState } from 'react';

import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Switch,
  useDisclosure,
} from '@chakra-ui/react';

export const SearchBar = ({
  isSearchOn,
  onChangeSearchText,
  onToggleSearch,
  searchText,
}: {
  isSearchOn: boolean;
  searchText: string;
  onChangeSearchText: ChangeEventHandler<HTMLInputElement>;
  onToggleSearch: () => void;
}) => (
  <>
    <Switch isChecked={isSearchOn} onChange={onToggleSearch} />
    <InputGroup size="md">
      <Input
        placeholder="Search.."
        value={searchText}
        onChange={onChangeSearchText}
      />
    </InputGroup>
  </>
);
