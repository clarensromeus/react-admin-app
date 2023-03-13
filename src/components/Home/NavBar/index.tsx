// internal imports of sources
import * as React from 'react';
import { FC } from 'react';
// external imports of sources
import { Box, Typography, Button } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonIcon from '@mui/icons-material/Person';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import Icon from '@mui/material/Icon';
import orange from '@mui/material/colors/orange';
import green from '@mui/material/colors/green';
import { alpha, styled } from '@mui/material/styles';
import { loadCSS } from 'fg-loadcss';
// internal crafted imports of sources like created components and so...
import * as MuiStyles from '../../../MuiStyles/Nav';

const { Search, SearchIconWrapper, StyledInputBase } = MuiStyles;

// using for defining a normal set of pixels between the appBar and the component below
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

// defining the App Bar color
const NavBarColor: string = orange[900];

const NavBar: FC = () => {
  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.14.0/css/all.css'
      // Inject before JSS
    );

    return () => {
      node.parentNode!.removeChild(node);
    };
  }, []);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [Status, setStatus] = React.useState<string | null>('Who are you ?');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleStatus = (event: React.MouseEvent, status: string) => {
    console.log(event);
    setStatus(status);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ bgcolor: NavBarColor }}>
          <Toolbar>
            <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
              TechAdmin
            </span>
            <Icon baseClassName="fas" className="" sx={{ fontSize: 30 }} />
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'block' },
                visibility: 'hidden',
              }}
            >
              ls
            </Box>
            <Box
              sx={{
                bgcolor: green[900],
                display: 'flex',
              }}
            >
              <Box>
                {Status === 'Administrator' ? (
                  <ManageAccountsIcon sx={{ fontSize: '60px' }} />
                ) : (
                  <AccountCircleIcon sx={{ fontSize: '60px' }} />
                )}
              </Box>
              <Typography component="div">
                <Button variant="text" onClick={handleClick} disableRipple>
                  <span style={{ color: '#fafafa', fontWeight: 'bold' }}>
                    {Status}
                  </span>
                  <ExpandLessIcon sx={{ color: '#fafafa', fontSize: '2em' }} />
                </Button>
              </Typography>
            </Box>
            <Menu
              id="User_identification"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuList sx={{ bgcolor: orange[900] }}>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <ManageAccountsIcon sx={{ color: '#fafafa' }} />
                  </ListItemIcon>
                  <ListItemButton
                    onClick={(event) => handleStatus(event, 'Administrator')}
                  >
                    <ListItemText>
                      <Typography
                        fontFamily="Monospace"
                        sx={{ color: '#fafafa' }}
                      >
                        Administrator
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonIcon sx={{ color: '#fafafa' }} />
                  </ListItemIcon>
                  <ListItemButton
                    onClick={(event) => handleStatus(event, 'A student')}
                  >
                    <ListItemText>
                      <Typography
                        fontFamily="Monospace"
                        sx={{ color: '#fafafa' }}
                      >
                        A student
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </MenuItem>
              </MenuList>
            </Menu>
          </Toolbar>
        </AppBar>
        <Offset />
      </Box>
    </div>
  );
};

export default NavBar;

// you may notice that some lines of code using the third-party package
// Loadcss
