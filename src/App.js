import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatPage = () => (
  <div>
    <h1>HAT PAGE</h1>
  </div>
);


function App() {
  return ( 
    <div>
      <switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatPage} />
      </switch>
    </div>
  );
}

export default App;
