import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './App';
import reducer from './reducers';
import onStart from './scripts/ui';

const store = createStore(reducer);

const render = () => {
  ReactDOM.render(
    <App
      onIncrement={ () => store.dispatch({type: 'INCREMENT'})}
      onDecrement={ () => store.dispatch({type: 'DECREMENT'})}
      value={ store.getState() }
    />,
    document.getElementById('root'),
  );
  onStart(document);
};

render();
store.subscribe(render);
