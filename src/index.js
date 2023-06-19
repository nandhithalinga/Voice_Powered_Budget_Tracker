import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { SpeechProvider } from '@speechly/react-client';
import { Provider } from './context/context';
ReactDOM.render(
    <SpeechProvider appId="d0f6713f-9715-4031-b4fa-84446954092c" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
    document.getElementById('root')
  );
  