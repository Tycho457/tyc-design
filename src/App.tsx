import React, { useState } from 'react';
import Button from './components/Button/button';
import './App.css';

const App: React.FC = () => {
 
  return (
    <div className="App">
      <h1>hello react</h1>
      <Button disabled> helo </Button>
      <Button btnType={'primary'} size={'lg'}>大大</Button>
      <Button btnType={'default'} size={'lg'}>小小</Button>
    </div>
  );
}

export default App;
