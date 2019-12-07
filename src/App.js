import React, { Component } from 'react';
import { Provider } from 'react-redux'

import { BoardsList } from './containers'
import store from './store'

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BoardsList />
        </div>
      </Provider>
    );
  }
}

export default App;
