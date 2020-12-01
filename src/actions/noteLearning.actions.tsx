import { ActionCreator } from "redux";

export enum NoteLearningTypes {
	RandomNotes,
}

export interface IRandmizeNotes {
	type: NoteLearningTypes;
}

export type NoteLearningActions = IRandmizeNotes;

export const RandomizeNotes: ActionCreator<IRandmizeNotes> = () => {
	return {
		type: NoteLearningTypes.RandomNotes,
	}
}
