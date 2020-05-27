import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

import App from './App';

io('http://localhost:3000');

ReactDOM.render(<App />, document.getElementById('root'));
