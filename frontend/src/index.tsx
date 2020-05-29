import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/index.scss';
import { StateProvider } from './store/store';

import App from './App';

ReactDOM.render(<StateProvider><App /></StateProvider>, document.getElementById('root'));
