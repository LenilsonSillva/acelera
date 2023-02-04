import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Grid, Switch } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import {Drawer as MobileDrawer} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/Language';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import PaidIcon from '@mui/icons-material/Paid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LogoutIcon from '@mui/icons-material/Logout';
import { Tooltip, Menu, MenuItem } from '@mui/material'
import Logo from './img/t.png'
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import fireAccess from '../Auth/config/fb';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer({data}) {
  const navigate = useNavigate()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElCred, setAnchorElCred] = React.useState(null);

  const verify_signout = () => {
    const auth = getAuth(fireAccess);
      signOut(auth).then(() => {
    // Sign-out successful.
    navigate('/login', {replace: true})
    }).catch((error) => {
    // An error happened.
    });
  }

  const settings = [
    { key : 1, title : 'Produtividade', icon : <BarChartIcon sx={{ fontSize: 35}}/>, bg : "rgb(3,169,244)", click : null },
    { key : 2, title : 'Comprar créditos', icon : <ShoppingCartIcon sx={{ fontSize: 35}}/>, bg : "rgb(215, 217, 29)", click : null },
    { key : 3, title : 'Meus dados', icon : <ManageAccountsIcon sx={{ fontSize: 35}}/>, bg : "grey", click: null },
    { key : 4, title : 'Suporte', icon : <ContactSupportIcon sx={{ fontSize: 35}}/>, bg : "rgb(14,237,187)", click : null },
    { key : 5, title : 'Sair', icon : <LogoutIcon sx={{ fontSize: 35}}/>, bg : "rgb(247,107,79)", click : verify_signout }
  ]

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    setRotateChevron(true)
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    setRotateChevron(false)
  };

  const handleOpenCredMenu = (event) => {
    setAnchorElCred(event.currentTarget);
  };

  const handleCloseCredMenu = () => {
    setAnchorElCred(null);
  };

  const [rotateChevron, setRotateChevron] = React.useState(anchorElUser);

  const rotate = rotateChevron ? "rotate(180deg)" : "rotate(0)"


  //Change dark/light mode

    const [value, setValue] = React.useState();

    const changeValue = () => {
    value === true ? setValue(false) : setValue(true);
    return data(value)
    }

    const MaterialUISwitch = styled(Switch)(({ theme }) => ({
        width: 62,
        height: 34,
        padding: 7,
        '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#ffce2e',
            )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
        },
        '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#ffce2e',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
        },
        '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
        },
    }));


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />


      <AppBar position="fixed" open={open} color='inherit' sx={{bgcolor: theme.palette.background.paper}}>
        <Toolbar style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                    marginRight: { xs: 1, md: 5 },
                    ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <img src={Logo} style={{ width: 35, height: '100%', marginRight: 10}}/>
                <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', md: 'block' } }}>
                    acelera
                </Typography>
            </Box>
            <Box className='opt' sx={{ display: open ? {xs: 'none', sm: 'flex'} : 'flex', flexDirection: 'row', alignItems: 'center', bgcolor: theme.palette.background.th, borderRadius: 10, pl: 1.5 }}>
                
                <Box sx={{ paddingX: 0.3, paddingY: 0.1, mr: 0.5, borderRadius: 3, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  <Tooltip title="Créditos">
                    <IconButton onClick={handleOpenCredMenu} sx={{ p: 0, display: 'flex', flexDirection: 'column' }}>
                      <Box>
                        <Typography sx={{ fontSize: 11, fontWweight: 'bold'}}>CRÉDITOS</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <PaidIcon sx={{ fontSize: 18.5, color: 'rgb(225,92,70)', mr: 0.3}}/>
                        <Typography sx={{ fontSize: 13, fontWeight: 'BOLD'}}>100</Typography>
                      </Box>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElCred}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElCred)}
                    onClose={handleCloseCredMenu}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingInline: 0.5 }}>
                      <Typography>Você possui 100</Typography>
                      <PaidIcon sx={{ fontSize: 26, ml: 1, color: 'rgb(225,92,70)'}}/>
                    </Box>
                    <Divider sx={{ marginBlock: 1 }}/>
                    <Box sx={{ p: 2 }}>
                      <Typography>Use seus créditos para adquirir os modelos.</Typography>
                      <Typography>Precisando de mais créditos? <a style={{ color: theme.palette.text.button, fontWeight: 'bold' }} className='btn_pointer' onClick={()=>{navigate('/signup', {replace: true})}}>Compre aqui!</a></Typography>
                    </Box>
                  </Menu>
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Mais opções">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <AccountCircleIcon sx={{ fontSize: 40 }}/>
                      <ExpandMoreIcon style={{ transform: rotate, transition: "all 0.2s linear" }}/>
                    </IconButton>
                  </Tooltip>
                    <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', pb: 2}}>
                      <AccountCircleIcon sx={{ fontSize: 70, pb: 1 }}/>
                      <Typography sx={{ marginInline: 2}}>Nome do Usuário</Typography>
                    </Box>
                    <Divider sx={{ marginBlock: 1 }}/>  
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                      <MaterialUISwitch checked={value} onClick={changeValue} sx={{ margin: -1 }}/>
                      <LanguageIcon sx={{ fontSize: 35 }}/>
                    </Box>
                    <Divider sx={{ marginBlock: 1 }}/>
                      <Box>
                      <Grid container sx={{  display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        {settings.map((setting, index) => (
                          <Grid item xs={6} xl={6} key={index} sx={{ marginBlock: 1.5, marginInline: -0.4, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', display: 'flex' }}>
                            <Box sx={{ p: 1.1, marginInline: -3, bgcolor: setting.bg, borderRadius: 2 }}>
                            <IconButton onClick={setting.click}>
                              {setting.icon}
                              </IconButton>
                            </Box>
                            <Typography sx={{ fontSize: 13 }}>{setting.title}</Typography>
                          </Grid>
                        ))}
                      </Grid>
                      </Box>
                    </Menu>
                </Box>

            </Box>
        </Toolbar>
      </AppBar>

      <ClickAwayListener
        mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
        onClickAway={() => open && setOpen(false)}
      >

      <Drawer id='drawer' variant="permanent" open={open} sx={{ display: { xs: 'none', md: 'block' } }}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Cartão de Visita', 'Convite com Link', 'Cartaz', 'Panfleto', 'Ingresso'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                className='opt'
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  m: 1,
                  borderRadius: 30,
                  bgcolor: theme.palette.background.secondary
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  m: 1,
                  borderRadius: 30,
                  bgcolor: theme.palette.background.secondary
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      </ClickAwayListener>


      <MobileDrawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
          display: { xs: 'block', md: 'none' },
        }}
        variant="temporary"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </MobileDrawer>


    </Box>
  );
}