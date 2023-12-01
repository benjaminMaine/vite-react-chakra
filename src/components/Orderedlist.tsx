import { Fragment, useEffect } from 'react';

import {
  Divider,
  ListItem,
  OrderedList as ChakraOrderedList,
  Text,
} from '@chakra-ui/react';

import { useFindAllPosts } from '../requests/posts/useFindAllPosts';

import { SpinnerLoader } from './SpinnerLoader';

export const Orderedlist = ({ searchText }: { searchText: string }) => {
  const { data: postsData, isLoading, refetch } = useFindAllPosts(searchText);

  useEffect(() => {
    refetch();
  }, [searchText, refetch]);

  return isLoading ? (
    <SpinnerLoader />
  ) : (
    <ChakraOrderedList display="flex" flexDir="column" gap={3}>
      {postsData?.map(({ title, author }) => (
        <Fragment key={`${title}-${author}`}>
          <ListItem mx={1} display="flex" gap={3} key={title}>
            <Text display="flex" flex={1} fontWeight="bold">
              {author}
            </Text>
            <Text display="flex" flex={6}>
              {title}
            </Text>
          </ListItem>
          <Divider />
        </Fragment>
      ))}
    </ChakraOrderedList>
  );
};
