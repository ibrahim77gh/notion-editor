import React, {useState, useEffect, useRef} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Stack, TextField, Button, Typography, Divider, CircularProgress, Box, Toolbar, CssBaseline, Input } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MuiAppBar from '@mui/material/AppBar';
import { Menu } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { usePages } from '../contexts/PagesContext';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));;


export default function PersistentDrawerLeft({open, handleDrawerClose, handleDrawerOpen}) {

    const [newPageName, setNewPageName] = useState('');
    const { allPages, setAllPages } = usePages();
    const bottomRef = useRef();
    const theme = useTheme();
    const navigate = useNavigate()
    const location = useLocation()

    const loadPages = () => {

    }

    const handleAddPage = () => {
        if (newPageName.trim() === '') {
            // Do not add a page with an empty name
            return;
        }
        // Generate a unique page ID (using uuid or any unique identifier)
        const newPageId = uuidv4();
        // Create a new page object and add it to your pages state or data structure
        const newPage = {
            id: newPageId,
            title: newPageName,
        };
        // Add the new page to your pages state or data structure
        // addPage(newPage);
        setAllPages((prevPages) => [...prevPages, newPage]);
        // Create a route dynamically for the new page
        navigate(`/${newPageId}`); // Use your routing library's navigation function
    }

    return (
        <>
        <CssBaseline />
        <AppBar position="fixed" open={open} sx={{ backgroundColor: 'rgb(251, 251, 250)' }}>
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
                <Menu />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ color: 'black' }}>
                Real time Editor
            </Typography>
            </Toolbar>
        </AppBar>
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                backgroundColor: 'rgb(251, 251, 250)',
            },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            </DrawerHeader>
            <Divider />
            <Stack variant='column' height='100%' m={2}>
                <Stack direction={'row'}>
                <Input
                    placeholder='Enter page name'
                    value={newPageName}
                    onChange={(e) => setNewPageName(e.target.value)}
                    style={{ color: 'black' }}
                />
                    <IconButton style={{ color: 'black' }} onClick={handleAddPage}>
                        <AddIcon />
                    </IconButton>
                </Stack>
                <Stack variant="column" mt={5} spacing={1}>
                    {allPages.map((page) => (
                    <Link
                        key={page.id}
                        to={`${page.id}`}
                        style={{ 
                            textDecoration: 'black', 
                            color:'black' ,
                            backgroundColor:location.pathname === `/${page.id}` ? 'lightgrey' : 'transparent', // Highlight the current page with grey background
                        }}
                        color='black'
                    >
                        {page.title}
                    </Link>
                    ))}
                </Stack>
            </Stack>
        </Drawer>
        </>
    );
}
