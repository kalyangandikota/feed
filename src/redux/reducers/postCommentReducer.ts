import { IPost, IComment } from '../../types';
import * as constants from '../constants';

interface IState {
  loading: Boolean;
  posts: IPost[]; 
  comments: IComment[]; 
}
  
export const initialState: IState = {
  loading: true,
  posts: [],
  comments: []
}

export const postCommentReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case constants.FETCH_POSTS.TRIGGER: {
        return {
          ...state,
          loading: true
        }
      }
      case constants.FETCH_POSTS.SUCCESS: {
        const { response } = action.payload;
        return {
          ...state,
          loading: false,
          posts: response
        }
      }
      case constants.FETCH_COMMENTS.SUCCESS: {
        const { response } = action.payload;
        return {
          ...state,
          comments: response
        }
      }
      case constants.Add_COMMENT: {
        console.log(action)
        const { comment } = action.payload;

        const comments = [...state.comments];
        comments.push(comment)
        return {
          ...state,
          comments
        }
      }
      default:
          return state;
    }
};
    export default postCommentReducer;