import React from 'react'
import { Link } from 'react-router-dom';
// import { useSelector } from "react-redux";

const Thought = () => {
    const thoughts = [
    { 
      _id:1,
      title: "Thought 1",
      description: "Description 1",
      mood: "Mood 1"
    },
    { 
      _id:2,
      title: "Thought 2",
      description: "Description 2",
      mood: "Mood 2"
    },
    { 
      _id:3,
      title: "Thought 3",
      description: "Description 3",
      mood: "Mood 3"
    },
    ];

    const thought = thoughts.map((thought) => {
        return (
            <div className="thought_container" key={thought._id}>
                <Link to={"/thought/" + thought._id}>
                {thought.title}
                </Link>
            </div>
      )});
      
      
      return <>{thought}</>;
}

export default Thought