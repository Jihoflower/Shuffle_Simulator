import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import {Main} from './main/Main';
import {Nav} from './nav/Nav';





function App() {
  return (
    <div>
      <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
