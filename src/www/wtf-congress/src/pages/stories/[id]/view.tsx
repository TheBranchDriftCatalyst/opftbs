import { useRouter } from 'next/router';
import { trpc } from '@/utils/trpc';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Card, CardContent, Grid, Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { SyntheticEvent, useEffect, useState } from 'react';
import { TabPanelProps } from '@mui/base';
import { useSwipeable } from 'react-swipeable';
import { Prisma } from '@prisma/client';

const StorySummaryCard = ({ title, summary }: Prisma.StorySelectScalar) => {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>
    </Card>
  );
};

const AuthorSummaryCard = ({ username }: Prisma.UserSelectScalar) => {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h5" component="div">
          {username}
        </Typography>
      </CardContent>
    </Card>
  );
};

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Page() {
  const router = useRouter();
  const [currentChapter, setChapter] = useState(0);
  const { data: story, isLoading } =
    trpc.prisma.story.findUniqueOrThrow.useQuery(
      {
        where: {
          uuid: router.query.id,
        },
        select: {
          title: true,
          summary: true,
          chapters: true,
          author: {
            select: {
              username: true,
              id: true,
            },
          },
        },
      },
      {
        queryKey: ['story', router.query.id],
      },
    );

  const { title, summary, author, chapters } = story || {};

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setChapter(newValue);
  };

  useEffect(() => {
    // @ts-ignore
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          setChapter((prevChapter) => Math.max(prevChapter - 1, 0));
          break;
        case 'ArrowRight':
          setChapter((prevChapter) => Math.min(prevChapter + 1));
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => setChapter((prevChapter) => Math.max(prevChapter - 1)),
    onSwipedRight: () =>
      setChapter((prevChapter) => Math.min(prevChapter + 1, 10)),
  });

  return (
    <Grid container spacing={2} alignItems="stretch" component={Box}>
      <Grid item container xs={12} spacing={2} alignItems="stretch">
        <Grid item xs={6}>
          <StorySummaryCard title={title} summary={summary} />
        </Grid>
        <Grid item xs={6}>
          <AuthorSummaryCard {...author} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={currentChapter}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              {chapters?.map((_chapter: any, idx: number) => {
                return (
                  <Tab
                    key={idx}
                    label={`Chapter ${idx + 1}`}
                    {...a11yProps(idx)}
                  />
                );
              })}
            </Tabs>
          </Box>
          {chapters?.map(({ content }: any, idx: number) => {
            return (
              <CustomTabPanel value={currentChapter} index={idx} key={idx}>
                {content}
              </CustomTabPanel>
            );
          })}
        </Paper>
      </Grid>
    </Grid>
  );
}
