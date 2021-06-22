import * as constants from '../constants';

import { action } from '../../utils/appUtils';

export const postsFetch = {
  request: () => action(constants.FETCH_POSTS.TRIGGER),
  success: (response: any,  requestPayload: any) => {
    return action(constants.FETCH_POSTS.SUCCESS, {
      payload: { response, requestPayload }
    })
  },
  failure: (error: any) =>
    action(constants.FETCH_POSTS.ERROR, { payload: { error } })
};

export const commentsFetch = {
  request: () => action(constants.FETCH_COMMENTS.TRIGGER),
  success: (response: any,  requestPayload: any) => {
    return action(constants.FETCH_COMMENTS.SUCCESS, {
      payload: { response, requestPayload }
    })
  },
  failure: (error: any) =>
    action(constants.FETCH_COMMENTS.ERROR, { payload: { error } })
}
