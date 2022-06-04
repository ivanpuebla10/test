import React from 'react'
import { useParams } from 'react-router-dom';
// import { useSelector } from "react-redux";

const ThoughtDetails = () => {
    const { _id } = useParams();
    console.log(typeof _id)

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
        if(thought._id === +_id){
        return (
            <div className="thought_container" key={thought._id}>
                {thought.title}
                {thought.description}
                {thought.mood}
            </div>
      )}}
      );
      
      
      return <>{thought}</>;
}

export default ThoughtDetails