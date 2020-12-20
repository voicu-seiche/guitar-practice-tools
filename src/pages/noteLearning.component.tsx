import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SyncIcon from '@material-ui/icons/Sync';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RandomizeNotes } from '../actions/noteLearning.actions';
import Card from '../components/card.component';
// import Fretboad from '../components/fretboard.component';
import { IAppState } from '../store/store';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		note: {
			color: theme.palette.secondary.contrastText,
			backgroundColor: theme.palette.secondary.main,
		},
	}),
);

const NoteLearning = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const notes = useSelector((state: IAppState) => state.noteLearning.notes);

	const handleRandomNotes = () => {
		dispatch(RandomizeNotes());
	};

	return (
		<React.Fragment>
			<Grid container spacing={3}>
				<Grid item xs={12} md={4} lg={7}>
					<Card title="Note learning exercices">
					</Card>
				</Grid>
				<Grid item xs={12} md={8} lg={5}>
					<Card title="Note Learning">
						<Box my={2} display="flex" flexDirection="row">
							{notes.map((item, index) => {
								return <Avatar key={index} className={classes.note}>
									{item}
								</Avatar>
							})}
						</Box>
						<Box>
							<Button variant="contained"
								color="primary"
								onClick={handleRandomNotes}>
								<SyncIcon />
                        		Randomize notes
                    		</Button>
						</Box>
					</Card>
				</Grid>
				<Grid item xs={12}>
					{/* <Fretboad /> */}
				</Grid>
			</Grid>
		</React.Fragment>
	)
}

export default NoteLearning;
