// internal imports of sources
import React, { FC } from 'react';
import './App.css';
// internal crafted imports like created components and so ...
import Home from './components/Home/index';

/*
**
 ! @params
 * the main file of the project
 ? this page is like a tunnel for the first-seen page off the project
**
*/

// this is the main app code
const App: FC = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default App;
