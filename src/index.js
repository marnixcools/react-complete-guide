import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App AppTitle="Hi I am marnix the NEW react programmer"/>, document.getElementById('root'));
registerServiceWorker();
