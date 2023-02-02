import { Paper, Box, Typography } from '@mui/material';
import * as React from 'react';
import { FC } from 'react';
import { alpha, styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import KeyIcon from '@mui/icons-material/Key';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import orange from '@mui/material/colors/orange';

// create the component style
const AuthStyle = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignContents: 'center',
  width: '800px',
}));

// interface IAuthenticationProps {}

const Authentication: FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <CssBaseline />
      <AuthStyle>
        <Box sx={{}}>
          <Paper elevation={3} sx={{ borderRadius: '10%' }}>
            <Box
              sx={{
                height: '400px',
                width: '400px',
                bgcolor: orange[900],
                borderRadius: '10%',
              }}
            >
              <Box sx={{ maxHeight: '100px' }}>
                <Tabs
                  centered
                  value={value}
                  onChange={handleChange}
                  aria-label="tabs for login and register"
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Tab
                    icon={<AccountCircleIcon fontSize="large" />}
                    label="LOGIN"
                    iconPosition="bottom"
                    sx={{
                      width: '50%',
                    }}
                  />
                  <Tab
                    icon={<KeyIcon fontSize="large" />}
                    label="REGISTER"
                    iconPosition="bottom"
                    sx={{
                      width: '50%',
                    }}
                  />
                </Tabs>
              </Box>
            </Box>
          </Paper>
        </Box>
      </AuthStyle>
    </div>
  );
};

export default Authentication;
