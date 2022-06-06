import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addThought } from "../../../features/thought/thoughtSlice";
import { useNavigate } from "react-router-dom";
import { Modal } from 'antd';
import './AddThought.scss';



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
    await setVisible(false)
    await navigate("/thought/" + _id)

}

const handleCancel = () => {
    console.log("hey funciona el cancel")
    setVisible(false)
   };

  return (
      <Modal className="modal" visible={visible} onOk={handleOk} onCancel={handleCancel}>
      <form className="addThought" >
      <label>How are you feeling?</label>
      <input
        value={mood} 
        type="text"
        onChange={onChange}
        name="mood"
        required
      />
      <label>What is going through your head right now?</label>
      <input
        value={title} 
        type="text"
        onChange={onChange}
        name="title"
        required
      />
      <label>Is there any evidence your thought is true?</label>
      <input
        value={description} 
        type="text"
        onChange={onChange}
        name="description"
        required
      />
      </form>
      </Modal>
)
};
