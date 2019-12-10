import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import First from './First';

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <Router>
          <First path='/' />
        </Router>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
