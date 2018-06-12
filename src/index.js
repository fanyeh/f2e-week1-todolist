import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './containers/App';
// // import App from './App';
import registerServiceWorker from './registerServiceWorker';
const store = createStore(rootReducer);
// ​
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// // ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
