import React from 'react';
import ReactDOM from 'react-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const store = configureStore();
const persister = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate 
      loading={<div>Loading...</div>}
      persistor={persister}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
