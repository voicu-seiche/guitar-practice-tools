import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Copyright from './components/copyright.component';
import NavBar from './components/navbar.component';
import Routes from './routes';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto',
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
}));


const App = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<NavBar />
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Container maxWidth="lg" className={classes.container}>
					<Switch>
						{Routes.map((route: any) => (
							<Route exact path={route.path} key={route.path}>
								<route.component />
							</Route>
						))}
					</Switch>
					<Box pt={4}>
						<Copyright />
					</Box>
				</Container>
			</main>
		</div>
	);
}

export default App;
