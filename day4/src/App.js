import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import MyForm from './components/cw';
import LoginButton from './components/Pah';

function App() {
  return (
    <div>
      <MyForm/>
      <LoginButton/>
    </div>
  );
}

export default App;
