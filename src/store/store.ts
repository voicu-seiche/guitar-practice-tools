import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';

import { INoteLearningState, noteLearningReducer } from '../reducers/noteLearning.reducer';

// Create an interface for the application state
export interface IAppState {
	noteLearning: INoteLearningState,
}

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
	noteLearning: noteLearningReducer,
});

// Create a configure store function of type `IAppState`
export default function configureStore(): Store<IAppState, any> {
	const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
	return store;
}
