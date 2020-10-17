import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0b72b9';
const arcOrange = '#ffba60';
const arcGrey = '#868686';

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
		estimateButton: {
			fontFamily: 'Pacifico',
			fontSize: '1.125rem',
			textTransform: 'none',
			color: 'white',
			paddingLeft: 20,
			paddingRight: 20
		},
		h2: {
			fontFamily: 'Raleway',
			fontWeight: 700,
			fontSize: '2.5rem',
			color: arcBlue,
			lineHeight: 1.5
		},
		h3: {
			fontFamily: 'Pacifico',
			fontSize: '2.5rem',
			color: arcBlue
		},
		h4: {
			fontFamily: 'Raleway',
			fontSize: '1.75rem',
			color: arcBlue,
			fontWeight: 'bold'
		},
		subtitle1: {
			color: arcGrey,
			fontSize: '1.25rem',
			fontWeight: 300
		},
		subtitle2: {
			color: 'white',
			fontSize: '1.25rem',
			fontWeight: 300
		},
		body1: {
			fontSize: '1.25rem',
			color: arcGrey,
			fontWeight: 300
		},
		learnButton: {
			borderColor: arcBlue,
			color: arcBlue,
			borderWidth: 2,
			textTransform: 'none',
			borderRadius: 50,
			fontFamily: 'Roboto',
			fontWeight: 'bold'
		}
  	}
});