import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  left: '20%',
  borderRadius: '30px',
  backgroundColor: alpha(theme.palette.common.white, 0.14),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.23),
  },
  marginLeft: 0,
  width: '20%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '20%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '20%',
    [theme.breakpoints.up('sm')]: {
      // width: '12ch',
      width: '100px',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export { Search, SearchIconWrapper, StyledInputBase };
