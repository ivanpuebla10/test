import React from 'react'
import Thought from './Thought/Thought'
import './Thoughts.scss';
// import { useSelector } from "react-redux";

const Thoughts = () => {
  return (
    <div className="thoughts_container">
        <Thought/>
        <button>Add a Thought</button>
    </div>
  )
}

export default Thoughts