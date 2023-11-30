import axios from 'axios';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Post } from '../../types/post';
import { QUERY_KEYS } from '../keys';

type CreatePostDTO = Omit<Post, 'id'>;

const mutationFn = (newPostDTO: CreatePostDTO): Promise<Post> =>
  axios
    .post('http://localhost:5001/posts', newPostDTO, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
    .then((res) => res.data);

export const useCreatePost = (options = {}) => {
  const queryClient = useQueryClient();
  return useMutation<Post, unknown, CreatePostDTO, Post[]>({
    mutationFn,
    onMutate: async (newPostDTO) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({
        queryKey: [QUERY_KEYS.POSTS.FIND_ALL],
      });

      // Snapshot the previous value
      const previousPosts = queryClient.getQueryData<Post[]>([
        QUERY_KEYS.POSTS.FIND_ALL,
      ]);

      // Optimistically update to the new value
      queryClient.setQueryData<Post[]>(
        [QUERY_KEYS.POSTS.FIND_ALL],
        (oldPosts = []) => [
          ...oldPosts,
          { ...newPostDTO, description: 'optimistic update went wrong', id: 0 },
        ]
      );

      return previousPosts;
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(['todos'], context);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.POSTS.FIND_ALL] });
    },
    ...options,
  });
};
