import axios from 'axios';

import { useQuery } from '@tanstack/react-query';

import { REQUEST_DELAY } from '../../constants';
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
    staleTime: 1000 * 2,
  });
