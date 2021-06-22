import { takeEvery, all } from 'redux-saga/effects';
import { fetchPosts, fetchComments } from './postsCommentsSagas';
import * as constants from '../constants';


export default function* rootSaga(): any {
  yield all([
    yield takeEvery(constants.FETCH_POSTS.TRIGGER,
    fetchPosts),
    yield takeEvery(constants.FETCH_COMMENTS.TRIGGER, fetchComments)
  ])      
}