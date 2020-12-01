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
            // const notes = shuffle([...initialNoteLearningState.notes]);
            const notes = [...initialNoteLearningState.notes].sort(() => Math.random() - 0.5);
            return {
                ...state,
                notes
            };
        default:
            return state;
    }
}

// function shuffle(array: string[]) {
//     var currentIndex = array.length, temporaryValue, randomIndex;

//     const result = Array(array.length);

//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
//         // Pick a remaining element...
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;

//         // And swap it with the current element.
//         //   temporaryValue = array[currentIndex];
//         //   array[currentIndex] = array[randomIndex];
//         //   array[randomIndex] = temporaryValue;

//         result.push(array[randomIndex]);
//     }

//     return result;
// }
