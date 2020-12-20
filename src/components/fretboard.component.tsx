// import { Box } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	// root: {
	// 	"& tbody": {
	// 		"& td": {
	// 			borderLeft: "solid 3px",
	// 			borderRight: "solid 3px",
	// 			"&:first-child": {
	// 				borderLeft: "none",
	// 			},
	// 			"&:last-child": {
	// 				borderRight: "none",
	// 			},
	// 		}
	// 	}
	// },
	root: {
		flexGrow: 1,
	},
	paper: {
		textAlign: 'center',
		justifyContent: 'center',
		color: theme.palette.text.secondary,
	},
}));

const Fretboad = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={0}>
				<Grid item xs={1}><Paper className={classes.paper}><Avatar variant="circle">A</Avatar></Paper></Grid>
				<Grid item xs={1}><Paper className={classes.paper}><Avatar variant="circle">A</Avatar></Paper></Grid>
				<Grid item xs={1}><Paper className={classes.paper}><Avatar variant="circle">A</Avatar></Paper></Grid>
				<Grid item xs={1}><Paper className={classes.paper}><Avatar variant="circle">A</Avatar></Paper></Grid>
				<Grid item xs={1}><Paper className={classes.paper}><Avatar variant="circle">A</Avatar></Paper></Grid>
				<Grid item xs={1}><Paper className={classes.paper}><Avatar variant="circle">A</Avatar></Paper></Grid>
				<Grid item xs={1}><Paper className={classes.paper}><Avatar variant="circle">A</Avatar></Paper></Grid>
				<Grid item xs={1}><Paper className={classes.paper}><Avatar variant="circle">A</Avatar></Paper></Grid>
				<Grid item xs={1}><Paper className={classes.paper}><Avatar variant="circle">A</Avatar></Paper></Grid>
				<Grid item xs={1}><Paper className={classes.paper}><Avatar variant="circle">A</Avatar></Paper></Grid>
				<Grid item xs={1}><Paper className={classes.paper}><Avatar variant="circle">A</Avatar></Paper></Grid>
				<Grid item xs={1}><Paper className={classes.paper}><Avatar variant="circle">A</Avatar></Paper></Grid>
				<Grid item xs={1}><Paper className={classes.paper}><Avatar variant="circle">A</Avatar></Paper></Grid>
			</Grid>
		</div>
		// <TableContainer component={Paper}>
		// 	<Table aria-label="fretboard" classes={classes}>
		// 		<TableHead>
		// 			<TableRow>
		// 				<TableCell align="center">1</TableCell>
		// 				<TableCell align="center">2</TableCell>
		// 				<TableCell align="center">3</TableCell>
		// 				<TableCell align="center">4</TableCell>
		// 				<TableCell align="center">5</TableCell>
		// 				<TableCell align="center">6</TableCell>
		// 				<TableCell align="center">7</TableCell>
		// 				<TableCell align="center">8</TableCell>
		// 				<TableCell align="center">9</TableCell>
		// 				<TableCell align="center">10</TableCell>
		// 				<TableCell align="center">11</TableCell>
		// 				<TableCell align="center">12</TableCell>
		// 			</TableRow>
		// 		</TableHead>
		// 		<TableBody>
		// 			<TableRow>
		// 				<TableCell align="center">
		// 					<Avatar variant="circle">A</Avatar>
		// 				</TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 			</TableRow>
		// 			<TableRow>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 			</TableRow>
		// 			<TableRow>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 			</TableRow>
		// 			<TableRow>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 			</TableRow>
		// 			<TableRow>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 			</TableRow>
		// 			<TableRow>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 				<TableCell align="center"></TableCell>
		// 			</TableRow>
		// 		</TableBody>
		// 	</Table>
		// </TableContainer>
	);
}

export default Fretboad;
