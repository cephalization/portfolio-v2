// Library Imports
import React from 'react';
import ReactDOM from 'react-dom';
// Component Imports
import MainComponent from './components/MainComponent';
// Style Imports
import './index.css';
// Other Imports
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

ReactDOM.render(
  <MainComponent />,
  document.getElementById('root')
);
