import { Prisma } from '@prisma/client';
import { TextField } from '@mui/material';
import StoriesGrid, { ColumnDef } from '@/components/StoriesGrid';
import { useState } from 'react';

export default function Page() {
  const [search, setSearch] = useState<string>('');

  const storiesQuery: Prisma.StoryFindManyArgs = {
    where: {
      title: {
        contains: search,
        mode: 'insensitive',
      },
    },
    select: {
      title: true,
      uuid: true,
      summary: true,
      createdAt: true,
      _count: {
        select: {
          chapters: true,
        },
      },
      author: {
        select: {
          username: true, // Select the name of the author
        },
      },
      tags: {
        select: {
          tag: {
            select: {
              name: true, // Select the name of the tag
            },
          },
        },
      },
      stats: {
        select: {
          views: true, // Select the number of views
        },
      },
    },
    orderBy: {
      createdAt: 'desc', // Order by createdAt in descending order
    },
  };

  const columns: ColumnDef[] = [
    {
      field: 'title',
      sortable: true,
    },
    {
      field: 'username',
      header: 'Author',
    },
    {
      field: 'tags',
    },
    {
      field: 'views',
      header: 'Views',
    },
    {
      field: 'summary',
      header: 'Summary',
    },
  ];

  return (
    <>
      <TextField
        label="Uncontrolled Input"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        defaultValue=""
      />
      <StoriesGrid query={storiesQuery} columns={columns} />
    </>
  );
}
