import { Center, FormControl, Input, Spinner, Stack } from '@chakra-ui/react';

import { AddPostModal } from './components/AddPostModal';
import { columnsTable } from './components/DataTable/columns';
import { DataTable } from './components/DataTable/DataTable';
import ThemeToggleButton from './components/ThemeToggleButton';
import { useFindAllPosts } from './requests/posts/useFindAllPosts';

function App() {
  const { data: postsData, isLoading, isFetching } = useFindAllPosts();

  return isLoading || isFetching ? (
    <Center mt={8}>
      <Spinner />
    </Center>
  ) : (
    <Stack gap={4} p={8}>
      <FormControl>
        <Input placeholder="Search.." />
      </FormControl>
      {postsData && <DataTable columns={columnsTable} data={postsData} />}
      <ThemeToggleButton pos="fixed" bottom="2" right="2" />
      <AddPostModal />
    </Stack>
  );
}

export default App;
