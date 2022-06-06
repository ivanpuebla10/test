import React from 'react'
import { Link } from 'react-router-dom';
import { RightOutlined, CloudOutlined } from "@ant-design/icons";
import { useSelector } from 'react-redux';

const Thought = () => {
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

        return (
            <div className="thought_container" key={thought.thought._id}>
                <Link to={"/thought/" + thought.thought._id} className="individual_thought_box">
                    <span>
                        <CloudOutlined style={{ margin: '2em'}}/>
                        <span>{thought.thought.title}</span>
                        <RightOutlined style={{ margin: '2em'}} />
                    </span>
                </Link>
            </div>
      )});
      
      
      return <>{thought}</>;
}

export default Thought