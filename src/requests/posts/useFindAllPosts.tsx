import axios from 'axios';

import { useQuery } from '@tanstack/react-query';

import { REFETCH_INTERVAL, REQUEST_DELAY, STALE_TIME } from '../../constants';
import { Post } from '../../types/post';
import { QUERY_KEYS } from '../keys';

const queryFn = (): Promise<Post[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
<<<<<<< Updated upstream
      resolve(axios.get('http://localhost:5000/posts').then((res) => res.data));
=======
      axios.get('http://localhost:5001/posts').then((res) => {
        if (!res.data) {
          return resolve([]);
        }
        return resolve(
          searchText
            ? res.data.filter(({ title }: Post) =>
                lowerCase(title).includes(lowerCase(searchText))
              )
            : res.data
        );
      });
>>>>>>> Stashed changes
    }, REQUEST_DELAY);
  });

export const useFindAllPosts = () =>
  useQuery({
    queryKey: [QUERY_KEYS.POSTS.FIND_ALL],
    queryFn,
    staleTime: STALE_TIME,
    refetchInterval: REFETCH_INTERVAL,
  });
