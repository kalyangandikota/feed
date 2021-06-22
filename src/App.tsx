import React from 'react';
import './App.css';
import reducers from './redux/reducers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import Posts from './components/Posts';
import Post from './components/Post';
import rootSaga from './redux/sagas';

class App extends React.Component{
  store: any;
  constructor(props: any) {
    super(props);
    const sagaMiddleware = createSagaMiddleware()
    this.store = createStore(
      reducers,
      applyMiddleware(sagaMiddleware, logger)
      )
      sagaMiddleware.run(rootSaga);
  }
  render(){
    return (
      <Provider store={this.store}>
        <Router>
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route exact path="/post/:userId/:postId" component={Post} />
            </Switch>
        </Router>
      </Provider>

    );
  }
}

export default App;
