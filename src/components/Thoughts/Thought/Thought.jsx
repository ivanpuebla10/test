import React from 'react'
import { Link } from 'react-router-dom';
import { RightOutlined, CloudOutlined } from "@ant-design/icons";
import { useSelector } from 'react-redux';

const Thought = () => {
    const  {thoughts}  = useSelector( (state) => state.thought )
    
    const allThoughts = thoughts || []

    const thought = allThoughts.map((thought) => {
        return (
            <div className="thought_container" key={thought.thought._id}>
                <Link to={"/thought/" + thought.thought._id} style={{display: "flex",flexDirection: "column", alignItems: "center"}} >
                    <p style={{fontWeight: "300",fontSize: "1em"}}>{thought.thought.mood}</p>
                        {/* <CloudOutlined style={{ margin: '2em'}}/> */}
                    <span style={{display: "flex",fontSize: "1em"}}>
                    <span style={{widht: "auto",wordWrap: "break-word",display: "flex",justifyContent: "center"}}>{thought.thought.title}</span>
                    <span><RightOutlined /></span>   
                    </span>          
                </Link>
            </div>
      )});
      
      
      return <>{thought}</>;
}

export default Thought