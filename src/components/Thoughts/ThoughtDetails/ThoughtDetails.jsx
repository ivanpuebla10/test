import React from 'react'
import { useParams } from 'react-router-dom';
import './ThoughtDetails.scss';
import { LeftOutlined, CloudOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useSelector } from "react-redux";

const ThoughtDetails = () => {
    const { _id } = useParams();
    console.log(typeof _id)

    const  thoughts  = useSelector( (state) => state.thoughts )
    const allThoughts = thoughts || []
    
    let thoughtsLS =  JSON.parse(localStorage.getItem("thoughts")) || []; 
    // const thoughts = [
    // { 
    //   _id:1,
    //   title: "Thought 1",
    //   description: "Description 1",
    //   mood: "Mood 1"
    // },
    // { 
    //   _id:2,
    //   title: "Thought 2",
    //   description: "Description 2",
    //   mood: "Mood 2"
    // },
    // { 
    //   _id:3,
    //   title: "Thought 3",
    //   description: "Description 3",
    //   mood: "Mood 3"
    // },
    // ];

    const thought = thoughtsLS.map((thought) => {
        if(thought._id === +_id){
        return (
            <div className="thought_container" key={thought._id}>
                <span>
                <Link to="/">
                <LeftOutlined style={{ margin: '2em'}}/>
                <CloudOutlined/>
                </Link>
                {thought.title}
                </span>                
                <p>{thought.description}</p>
                <p>{thought.mood}</p>
            </div>
      )}}
      );
      
      
      return <>{thought}</>;
}

export default ThoughtDetails