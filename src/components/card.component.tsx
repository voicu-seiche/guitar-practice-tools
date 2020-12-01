import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import Title from './title.component';
// import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
	},
	fixedHeight: {
		height: 240,
	},
}));

function Card(props: any) {
	const classes = useStyles();
	// const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	return (
		<React.Fragment>
			<Paper className={classes.paper}>
				<Title>{props.title}</Title>
				<Divider variant="fullWidth" />
				{props.children}
			</Paper>
		</React.Fragment>
	);
}

Card.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
};

export default Card;
