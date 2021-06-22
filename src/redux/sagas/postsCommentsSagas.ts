import { postsFetch, commentsFetch } from '../actions/entityActions'
import {fetchEntity} from './generics';
import * as api from '../../api';

export function* fetchPosts(action: any): any {
   
  yield fetchEntity(
    postsFetch,
    api.getPosts,
    [],
    action
  );
}

export function * fetchComments(action: any) {
  const { postId } = action.payload;
  yield fetchEntity(
    commentsFetch,
    api.getComments,
    [postId],
    action
  );
}

