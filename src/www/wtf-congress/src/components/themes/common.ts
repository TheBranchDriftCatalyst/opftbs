export const common = {
  components: {
    MuiTableRow: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:hover': {
            cursor: 'pointer',
          },
        }),
        head: ({ theme }) => {
          // console.log(theme);
          return {
            backgroundColor: theme.palette.primary.main,
            ...theme.typography.h3,
          };
        },
      },
    },
  },
};

export default common;
