import React from 'react';
import './App.scss';
import Thoughts from './components/Thoughts/Thoughts';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThoughtDetails from './components/Thoughts/ThoughtDetails/ThoughtDetails';
import NavBar from './components/NavBar/NavBar';
import { AddThought } from './components/Thoughts/AddThought/AddThought';

function App() {
  return (
    <div className="app">
      <Router>
      <div className="app-container">
      <Routes> 
      <Route path="/" element={<Thoughts/>}/>
      <Route path="/thought/:_id" element={<ThoughtDetails />} />
      <Route path="/addthought" element={<AddThought/>}/>
      </Routes>
      </div>
      <NavBar/>
      </Router>
    </div>
  );
}

export default App;
