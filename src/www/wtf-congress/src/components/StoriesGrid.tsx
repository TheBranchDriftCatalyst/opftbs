// 'use client';
import { trpc } from '@/utils/trpc';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Prisma } from '@prisma/client';
import { capitalize } from 'lodash';
import { get, isArray, isObject, isString, set } from 'lodash';
import {
  IconButton,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
// import { DateTime } from 'next-auth/providers/kakao';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Box from '@mui/material/Box';
import { useRouter } from 'next/navigation';

interface StoriesGridProps {
  query: Prisma.StoryFindManyArgs;
  columns: ColumnDef[];
}

export interface ColumnDef {
  field: string;
  header?: string;
  sortable?: boolean;
  cellValueGetter?: (rowData: any, field: string) => string | number;
  formatter?: (cellData: string | number | typeof Date) => string;
}

const flattenObject = (obj: Record<string, any>): Record<string, any> => {
  // console.log('flattening obj', obj);

  const result: Record<string, any> = {};

  const traverse = (currentObj: any, key: string) => {
    if (isArray(currentObj)) {
      // If the current object is an array, map over its items and traverse them
      result[key] = currentObj.map((item: any) => {
        if (isObject(item)) {
          // If the item is an object, find the innermost non-object value
          let value = item;
          while (isObject(value)) {
            const firstKey = Object.keys(value)[0];
            value = value[firstKey];
          }
          return value;
        }
        return item;
      });
    } else if (isObject(currentObj)) {
      // If the current object is an object, traverse its properties
      for (const k in currentObj) {
        traverse(currentObj[k], k);
      }
    } else {
      // If the current object is a primitive value, set it in the result object
      result[key] = currentObj;
    }
  };

  traverse(obj, '');
  return result;
};

const defaultValueGetter = (
  dataObj: Record<string, string | object | (object | string)[]>,
  field: string,
) => {
  // console.log('getting field: ', field, ' from dataObj: ', dataObj);
  return get(dataObj, field);
};

const defaultValueFormatter = (cellData: string | number | string[]) => {
  // console.log(cellData);
  if (isArray(cellData)) {
    return cellData.join(', ');
  } else {
    return String(cellData);
  }
};

export const StoriesGrid = ({ query, columns }: StoriesGridProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pageSize, _setPageSize] = useState(10);
  const [page, setPage] = useState(0);
  const router = useRouter();

  const { data: { _count: totalStories } = { _count: 0 } } =
    trpc.prisma.story.aggregate.useQuery({
      where: query?.where,
      _count: true,
    });

  query = useMemo(() => {
    return { take: pageSize, skip: page * pageSize, ...query };
  }, [page, pageSize, query]);

  const totalPages = useMemo(
    () => Math.ceil(totalStories / pageSize),
    [totalStories, pageSize, query],
  );

  const incrementPage = useCallback(() => {
    return setPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  }, [totalPages]);

  const decrementPage = useCallback(() => {
    return setPage((prevPage) => Math.max(prevPage - 1, 0));
  }, [totalPages]);

  useEffect(() => {
    // @ts-ignore
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          decrementPage();
          break;
        case 'ArrowRight':
          incrementPage();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [totalPages]);

  // @ts-ignore
  const { data, isLoading } = trpc.prisma.story.findMany.useQuery(query, {
    queryKey: ['recentStories', page],
    keepPreviousData: true,
  });

  const cDefs = columns.map((cDefOrString): ColumnDef => {
    let defObj = {};
    defObj = set(
      defObj,
      'field',
      isString(cDefOrString) ? cDefOrString : cDefOrString.field,
    );

    if (!isString(cDefOrString)) {
      defObj = { ...cDefOrString };
    }

    return {
      cellValueGetter: defaultValueGetter,
      formatter: defaultValueFormatter,
      ...defObj,
    };
  });

  return (
    <TableContainer
      // component={Paper}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
      className="hoverable-container"
    >
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {cDefs.map(({ header, field }) => {
              return (
                <TableCell key={field}>{header || capitalize(field)}</TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow
              hover={true}
              key={row.uuid}
              onClick={() => router.push(`/stories/${row.uuid}/view`)}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
              }}
              /*
                When adding the has read check, we need to pull down all the current users has read and store it as a map
                we don't want to do this in n + 1 queries, so we need to do it in one query and use a lookup table.
              */
              className={`hoverable-row ${false ? 'read' : ''}`}
            >
              {cDefs?.map(({ field, formatter, cellValueGetter }) => {
                const flatRowData = flattenObject(row);
                return (
                  <TableCell key={field} component="th" scope="row">
                    {formatter(cellValueGetter(flatRowData, field))}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <IconButton onClick={decrementPage}>
          <ChevronLeft />
        </IconButton>
        {isLoading ? (
          <LinearProgress
            sx={{ height: '.75rem', flexGrow: 1, borderRadius: '.25rem' }}
          />
        ) : (
          <Typography>
            {page + 1} / {totalPages}
          </Typography>
        )}
        <IconButton>
          <ChevronRight onClick={incrementPage} />
        </IconButton>
      </Box>
    </TableContainer>
  );
};

export default StoriesGrid;
