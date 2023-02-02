// internal imports of sources
import * as React from 'react';
import { FC } from 'react';
// external imports of sources
import { Box, Typography, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import Icon from '@mui/material/Icon';
import orange from '@mui/material/colors/orange';
import grey from '@mui/material/colors/grey';
import green from '@mui/material/colors/green';
import { alpha, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { loadCSS } from 'fg-loadcss';
// internal crafted imports of sources like created components and so...
import * as MuiStyles from '../../../MuiStyles/Nav';

const { Search, SearchIconWrapper, StyledInputBase } = MuiStyles;

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
                <AccountCircleIcon sx={{ fontSize: '60px' }} />
              </Box>
              <Typography component="div">
                <span>Unauthenticated </span>
                <ExpandLessIcon />
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <Offset />
        <Box sx={{ my: 7 }} />
      </Box>
    </div>
  );
};

export default NavBar;

// you may notice that some lines of code using the third-party package
// Loadcss
