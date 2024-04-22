import React, { useState } from 'react';
import { Drawer as MUIDrawer } from '@mui/material';
import { ReactNodeLike } from 'prop-types';

// type DrawerPosition = 'left' | 'right' | 'bottom';

// const useDrawer = (initialState = false) => {
//   const [isOpen, setIsOpen] = useState(initialState);
//
//   const toggleDrawer = (open?: boolean) => {
//     setIsOpen(typeof open === 'boolean' ? open : !isOpen);
//   };
//
//   return { isOpen, toggleDrawer };
// };

interface DrawerProps {
  children: ReactNodeLike;
  anchor: 'left' | 'right' | 'bottom';
}

const Drawer = ({ children, anchor }: DrawerProps) => {
  const [isOpen, toggleDrawer] = useState(false);

  return (
    children && (
      <>
        <button onClick={() => toggleDrawer(true)}>Open Drawer</button>
        <MUIDrawer
          anchor={anchor}
          open={isOpen}
          onClose={() => toggleDrawer(false)}
        >
          {children}
        </MUIDrawer>
      </>
    )
  );
};

export default Drawer;
