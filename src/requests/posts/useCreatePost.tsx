import axios from 'axios';

import { MutateOptions, useMutation } from '@tanstack/react-query';

import { Post } from '../../types/post';

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
) =>
  useMutation<Post, unknown, CreatePostDTO>({
    mutationFn,
    ...options,
  });
