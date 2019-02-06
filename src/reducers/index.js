import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as actions from '../actions';

const solutionState = handleActions({
  [actions.init]: (state, { payload }) => {
    const { userFinishedLesson } = payload;
    const lessonFinished = !!userFinishedLesson;
    return { canBeShown: lessonFinished, shown: lessonFinished };
  },
  [actions.showSolution]: (state) => {
    const newState = { ...state, shown: true };
    return newState;
  },
  [actions.makeSolutionAvailable]: (state) => {
    const newState = { ...state, canBeShown: true };
    return newState;
  },
  [actions.runCheckSuccess]: (state, { payload }) => {
    const { check: { data: { attributes } } } = payload;
    const newState = attributes.passed ? { canBeShown: true, shown: true } : { ...state };
    return newState;
  },
}, { canBeShown: false, shown: false });

export default combineReducers({
  solutionState,
});
