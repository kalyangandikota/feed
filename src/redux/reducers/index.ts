import { combineReducers } from 'redux';

import postCommentReducer from './postCommentReducer';

export default combineReducers({
  postContainer: postCommentReducer,
});