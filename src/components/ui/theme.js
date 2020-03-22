import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0b72b9';
const arcOrange = '#ffba60';

export default createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange
    },
    primary: {
      main: arcBlue
    },
    secondary: {
      main: arcOrange
    }
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1.125rem',
      textTransform: 'none',
      color: 'white',
      paddingLeft: 20,
      paddingRight: 20
    }
  }
});