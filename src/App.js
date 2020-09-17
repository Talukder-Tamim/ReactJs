import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './mycomponents/Welcome'
import Arrow from './mycomponents/Arrow'
import State from './mycomponents/State'
import SetState from './mycomponents/SetState'
import Condition from './mycomponents/Condition'
import ElementVariable from './mycomponents/ElementVariable'
import ForceUpdate from './mycomponents/ForceUpdate'
import NewDemo from './mycomponents/NewDemo'
import NewDemo1 from './mycomponents/NewDemo1'
import Form from './mycomponents/Form'


function App() {
  return (
    <div className="App">
      <NewDemo></NewDemo>
      <Form></Form>
    </div>
  );
}

export default App;
