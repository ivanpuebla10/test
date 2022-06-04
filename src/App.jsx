import React from 'react';
import './App.css';
import Thoughts from './components/Thoughts/Thoughts';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThoughtDetails from './components/Thoughts/ThoughtDetails/ThoughtDetails';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes> 
      <Route path="/" element={<Thoughts/>}/>
      <Route path="/thought/:_id" element={<ThoughtDetails />} />
      {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      </Router>
    </div>
  );
}

export default App;
