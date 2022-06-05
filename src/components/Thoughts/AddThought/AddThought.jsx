import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addThought } from "../../../features/thought/thoughtSlice";
import { useNavigate } from "react-router-dom";
import { Modal } from 'antd';


export const AddThought = ({visible, setVisible}) => {
const navigate = useNavigate();

const thoughts = useSelector((state) => state.thought);
const allThoughts = thoughts || []

  const [formData, setFormData] = useState({
    _id: allThoughts.thoughts.length+1,
    title:"",
    description:"",
    mood: "",
  });
  const {_id, title,description,mood} = formData

  const dispatch = useDispatch()

  const onChange = (e)=>{
    setFormData((prevState)=> ({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
}

const handleOk = async () => {
    await dispatch(addThought(formData))
    // await setVisible(false)
    setTimeout(() => {
        navigate("/thought/" + _id);
      }, 1000);
}

const handleCancel = () => {
    console.log("hey funciona el cancel")
    setVisible(false)
   };

  return (
      <Modal title="Add a thought" visible={visible} onOk={handleOk} onCancel={handleCancel}>
      <label>What is going through your head right now?</label>
      <input
        value={title} 
        type="text"
        placeholder="title"
        onChange={onChange}
        name="title"
      />
      <label>Is there any evidence your thought is true?</label>
      <input
        value={description} 
        type="text"
        placeholder="description"
        onChange={onChange}
        name="description"
      />
        <input
        value={mood} 
        type="text"
        placeholder="mood"
        onChange={onChange}
        name="mood"
      />
      </Modal>
)
};
