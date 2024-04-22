// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { signIn, signOut, useSession } from 'next-auth/react';
// import Head from 'next/head';
// import * as changelog from '../../CHANGELOG.md';
import Grid from '@mui/material/Unstable_Grid2';
import { Paper, Typography } from '@mui/material';
import * as React from 'react';
import StoriesGrid, { ColumnDef } from '@/components/StoriesGrid';
import { Prisma } from '@prisma/client';
import ChangeLog from '@/components/ChangeLog';
import { styled } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  // padding: theme.spacing(1),
  // textAlign: 'center',
  // color: theme.palette.text.secondary,
}));

export default function IndexPage() {
  const recentStoriesQuery: Prisma.StoryFindManyArgs = {
    select: {
      title: true,
      uuid: true,
      createdAt: true,
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
      field: 'createdAt',
      header: 'createdAt',
      formatter: (date) => {
        const options: Intl.DateTimeFormatOptions = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };
        // console.log('cell formatter date: ', date);
        return date?.toLocaleString('en-US', options) || date;
      },
    },
  ];
  return (
    <Grid container spacing={2}>
      <Item xs={6} component={Paper}>
        <ChangeLog />
      </Item>
      <Item xs={6} component={Paper}>
        <Typography variant="h4">Sign Up/Login</Typography>
      </Item>
      <Item xs={12} component={Paper}>
        <StoriesGrid query={recentStoriesQuery} columns={columns} />
      </Item>
    </Grid>
  );
}

/**
 * If you want to statically render this page
 * - Export `appRouter` & `createContext` from [trpc].ts
 * - Make the `opts` object optional on `createContext()`
 *
 * @link https://trpc.io/docs/ssg
 */
// export const getStaticProps = async (
//   context: GetStaticPropsContext<{ filter: string }>,
// ) => {
//   const ssg = createSSGHelpers({
//     router: appRouter,
//     ctx: await createContext(),
//   });
//
//   await ssg.fetchQuery('post.all');
//
//   return {
//     props: {
//       trpcState: ssg.dehydrate(),
//       filter: context.params?.filter ?? 'all',
//     },
//     revalidate: 1,
//   };
// };
