import React from 'react';
import ReactDOM from 'react-dom';
import Posts from './components/Posts';

import {render, fireEvent, cleanup, waitFor, screen} from '@testing-library/react';
import { Provider } from 'react-redux'
import * as Reducer from './reducers/postCommentReducer';
import * as constants from './constants';
import AddComment from './components/AddCommentSection';


afterEach(cleanup)

describe('test the reducer and actions', () => {
  it('should return the initial state', () => {
    expect(Reducer.initialState).toEqual({ loading: true, comments: [], posts: [] })
  })
})





