import axios from 'axios';

import { useQuery } from '@tanstack/react-query';

import { REFETCH_INTERVAL, REQUEST_DELAY, STALE_TIME } from '../../constants';
import { Post } from '../../types/post';
import { QUERY_KEYS } from '../keys';

const queryFn = (): Promise<Post[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(axios.get('http://localhost:5001/posts').then((res) => res.data));
    }, REQUEST_DELAY);
  });

export const useFindAllPosts = () =>
  useQuery({
    queryKey: [QUERY_KEYS.POSTS.FIND_ALL],
    queryFn,
    staleTime: STALE_TIME,
    refetchInterval: REFETCH_INTERVAL,
  });
