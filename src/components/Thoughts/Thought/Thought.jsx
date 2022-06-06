import React from 'react'
import { Link } from 'react-router-dom';
import { RightOutlined, CloudOutlined } from "@ant-design/icons";
import { useSelector } from 'react-redux';

const Thought = () => {
    const  thoughts  = useSelector( (state) => state.thoughts )
    const allThoughts = thoughts || []

    let thoughtsLS =  JSON.parse(localStorage.getItem("thoughts")) || []; 

    const thought = thoughtsLS.map((thought) => {

        return (
            <div className="thought_container" key={thought.thought._id}>
                <Link to={"/thought/" + thought.thought._id} >
                    <span className="individual_thought_box">
                        {/* <CloudOutlined style={{ margin: '2em'}}/> */}
                        <span>{thought.thought.title}</span>
                        <RightOutlined style={{ margin: '2em'}} />
                    </span>
                </Link>
            </div>
      )});
      
      
      return <>{thought}</>;
}

export default Thought