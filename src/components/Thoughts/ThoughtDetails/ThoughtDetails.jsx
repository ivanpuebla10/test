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

    const thoughtDetails = thought.map((thought) => {
        if(thought.thought._id === +_id){
        return (
            <div className="thought_container_detail" key={thought.thought._id}>
                <span className="details_title">
                <Link to="/">
                <LeftOutlined style={{ margin: '1em'}}/>
                <CloudOutlined style={{ margin: '1em'}}/>
                {thought.thought.title}
                </Link>
                </span>  
                <div className="content-box">
                <p>Feeling: {thought.thought.mood}</p>
                <p className="question_paragraph">Is there any evidence your thought is true?</p>
                <p className="answer_paragraph">{thought.thought.description}</p>
                </div>              
            </div>
      )}}
      );
      
      
      return <>{thoughtDetails}</>;
}

export default ThoughtDetails