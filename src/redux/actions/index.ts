import * as constants from '../constants';
import { IComment } from '../../types';

const createAction: any = (type: string, payload: any) => {
    const action: any = {
      type
    };
    if (payload) {
      action.payload = payload;
    }
    return action;
  };



export const getPosts = () => createAction(constants.FETCH_POSTS.TRIGGER)

export const getCommentsForPost = (params: {postId: number}) => createAction(constants.FETCH_COMMENTS.TRIGGER, params);

export const addComment = (params: {comment: IComment}) => createAction(constants.Add_COMMENT, params);