import axios from 'axios';
import { lowerCase } from 'lodash';

import {
  QueryKey,
  QueryObserverOptions,
  useQuery,
} from '@tanstack/react-query';

import { REQUEST_DELAY, STALE_TIME } from '../../constants';
import { Post } from '../../types/post';
import { QUERY_KEYS } from '../keys';

const queryFn = (searchText: string): Promise<Post[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
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
    }, REQUEST_DELAY);
  });

export const useFindAllPosts = (
  searchText: string,
  options?: QueryObserverOptions
) =>
  useQuery<string, unknown, Post[], QueryKey>({
    queryKey: [QUERY_KEYS.POSTS.FIND_ALL, searchText],
    queryFn: () => queryFn(searchText),
    staleTime: STALE_TIME,
    ...options,
  });
