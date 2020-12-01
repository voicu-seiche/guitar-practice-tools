import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import SyncIcon from '@material-ui/icons/Sync';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RandomizeNotes } from '../actions/noteLearning.actions';
import Card from '../components/card.component';
import { IAppState } from '../store/store';

const NoteLearning = () => {
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
								return <Box key={index}>
									<Fab color="secondary">
										{item}
									</Fab>
								</Box>
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
				</Grid>
			</Grid>
		</React.Fragment>
	)
}

export default NoteLearning;
