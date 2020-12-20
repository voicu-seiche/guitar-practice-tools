import { Reducer } from "redux";
import { NoteLearningActions, NoteLearningTypes } from "../actions/noteLearning.actions";

export interface INoteLearningState {
	notes: string[];
}

export const initialNoteLearningState = {
	notes: ['A', 'B', 'C', 'D', 'E', 'F', 'G',]
};

export const noteLearningReducer: Reducer<INoteLearningState, NoteLearningActions> = (
	state = initialNoteLearningState,
	action
) => {
	switch (action.type) {
		case NoteLearningTypes.RandomNotes:
			let notes = shuffle([...initialNoteLearningState.notes]);
			if (!notes) {
				notes = [];
			}
			return {
				...state,
				notes
			};
		default:
			return state;
	}
}

const shuffle = (array: string[]) => {
	const permutations = permute(array);

	const randomIndex = Math.floor(Math.random() * permutations.length);

	return permutations[randomIndex - 1];
}

const permute = (array: string[]) => {
	const results: string[][] = [];

	const backtrack = (array: string[], temp: string[]) => {
		if (temp.length === array.length) {
			results.push(temp.slice());
			return;
		}

		array.forEach((item, index) => {
			const elementIndex = temp.findIndex((value) => value === item);

			const previousElement = index > 0 ? array[index - 1] : '';
			const nextElement = index < array.length ? array[index + 1] : '';

			if (elementIndex < 0 && !isElementNear(temp, previousElement) && !isElementNear(temp, nextElement)) {
				temp.push(item);
				backtrack(array, temp);
				temp.pop();
			}
		});
	};

	backtrack(array, []);
	return results;
};

const isElementNear = (array: string[], element: string) => {
	if (!!element) {
		if (array.length > 0) {
			return array[array.length - 1] === element;
		}
	}
	return false;
}
