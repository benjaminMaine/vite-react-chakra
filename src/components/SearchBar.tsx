import { ChangeEventHandler } from 'react';

import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import { useFindAllPosts } from '../requests/posts/useFindAllPosts';

export const SearchBar = ({
  searchText,
  onChangeSearchText,
}: {
  searchText: string;
  onChangeSearchText: ChangeEventHandler<HTMLInputElement>;
}) => {
  const { refetch } = useFindAllPosts(searchText);
  const handleClickSearch = () => {
    refetch();
  };

  return (
    <InputGroup size="md">
      <Input
        placeholder="Search.."
        value={searchText}
        onChange={onChangeSearchText}
      />
      <InputRightElement width="4.5rem" pr={3}>
        <Button h="1.75rem" size="sm" onClick={handleClickSearch}>
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
