import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './ThoughtDetails.scss';
import { LeftOutlined, CloudOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getThoughtById } from '../../../features/thought/thoughtSlice';

const ThoughtDetails = () => {
    const { thought } = useSelector((state) => state.thought);
    const { _id } = useParams();
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getThoughtById(_id));
      }, []);

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

    const thoughtDetails = thought.map((thought) => {
        if(thought.thought._id === +_id){
        return (
            <div className="thought_container" key={thought.thought._id}>
                <span>
                <Link to="/">
                <LeftOutlined style={{ margin: '2em'}}/>
                <CloudOutlined/>
                </Link>
                {thought.thought.title}
                </span>                
                <p>{thought.thought.description}</p>
                <p>{thought.thought.mood}</p>
            </div>
      )}}
      );
      
      
      return <>{thoughtDetails}</>;
}

export default ThoughtDetails