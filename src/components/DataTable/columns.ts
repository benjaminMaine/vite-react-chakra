import { createColumnHelper } from '@tanstack/react-table';

import { Post } from '../../types/post';

const columnHelper = createColumnHelper<Post>();
export const columnsTable = [
  columnHelper.accessor('title', {
    cell: (info) => info.getValue(),
    header: 'Title',
  }),
  columnHelper.accessor('author', {
    cell: (info) => info.getValue(),
    header: 'Author',
  }),
  columnHelper.accessor('description', {
    cell: (info) => info.getValue(),
    header: 'Description',
    meta: {
      isNumeric: true,
    },
  }),
];
