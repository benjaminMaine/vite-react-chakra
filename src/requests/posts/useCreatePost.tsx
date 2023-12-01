import axios from 'axios';

import {
  MutateOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

import { Post } from '../../types/post';
import { QUERY_KEYS } from '../keys';

type CreatePostDTO = Omit<Post, 'id'>;

const mutationFn = (data: CreatePostDTO): Promise<Post> =>
  axios
    .post('http://localhost:5001/posts', data, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
    .then((res) => res.data);

export const useCreatePost = (
  options: MutateOptions<Post, unknown, CreatePostDTO> | undefined = undefined
) => {
  const queryClient = useQueryClient();
  return useMutation<Post, unknown, CreatePostDTO>({
    mutationFn,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.POSTS.FIND_ALL] });
    },
    ...options,
  });
};
