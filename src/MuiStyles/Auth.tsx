import { alpha, createTheme } from '@mui/material/styles';

const bgColor_val: string = '#fafafa';

const themeStyled = createTheme({
  components: {
    MuiFilledInput: {
      defaultProps: {
        fullWidth: true,

        disableUnderline: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: bgColor_val,
        },
      },
    },
  },
});

export default themeStyled;

// for being customized input fields i am using Mui Theme and all properties which
// better fit my needs, in turn this is an advanced technique you can use to
// customize your input fields on your own by using fields-related properties
// for your applications
