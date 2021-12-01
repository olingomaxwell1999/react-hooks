import React from 'react';
import UseState from './hooks/UseState';
import './app.css';
import HookUseEffect from './hooks/HookUseEffect';
import UseReducerHook from './hooks/UseReducerHook';

function App() {
  return (
    <div className="App">
      <UseState/>
      <HookUseEffect/>
      <UseReducerHook/>
    </div>
  );
}

export default App;
