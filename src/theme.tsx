import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
	palette: {
		primary: {
			// main: '#45bf3c',
			// light: '#7df36c',
			// dark: '#008e00',
			// contrastText: '#000',
			main: '#9c27b0',
			contrastText: '#fff',
		},
		secondary: {
			main: '#ffb100',
			light: '#ffe34c',
			dark: '#c68200',
			contrastText: '#fff',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#e0e0e0',
		},
	},
});

export default theme;
