import PersistentDrawerLeft from './Sidebar/ResponsiveDrawer';
import { styled, useTheme } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import {useState} from 'react'
import { Box } from '@mui/material';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: `${drawerWidth}px`,
    }),
  }),
);

const Editor = () => {
  const [open, setOpen] = useState(true)

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Main open={open}>
      <PersistentDrawerLeft 
        open={open} 
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Box height={40}></Box>
      <Outlet/>
    </Main>
  );
}

export default Editor;
