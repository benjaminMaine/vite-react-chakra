import { ChangeEventHandler } from 'react';

import { Input, InputGroup } from '@chakra-ui/react';

export const SearchBar = ({
  searchText,
  onChangeSearchText,
}: {
  searchText: string;
  onChangeSearchText: ChangeEventHandler<HTMLInputElement>;
}) => (
  <InputGroup size="md">
    <Input
      placeholder="Search.."
      value={searchText}
      onChange={onChangeSearchText}
    />
    {/* <InputRightElement width="4.5rem" pr={3}> */}
    {/*   <Button h="1.75rem" size="sm"> */}
    {/*     Search */}
    {/*   </Button> */}
    {/* </InputRightElement> */}
  </InputGroup>
);
