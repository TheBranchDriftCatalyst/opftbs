import React from 'react';
import {
  Typography,
  CssBaseline,
  Container,
} from '@mui/material';
import { ReactNodeLike } from 'prop-types';
import HeaderNavBar from '@/components/HeaderNavBar';
import Footer from '@/components/Footer';

interface PageLayoutProps {
  children: ReactNodeLike;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <HeaderNavBar />
      <Container>{children}</Container>
      {/*<footer>*/}
      <Footer />
      {/*</footer>*/}
      <CssBaseline />
      <Typography />
    </>
  );
};

export default PageLayout;
