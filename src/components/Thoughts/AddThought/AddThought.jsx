import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addThought } from "../../../features/thought/thoughtSlice";
import { useNavigate } from "react-router-dom";
import { Modal } from 'antd';


export const AddThought = ({visible, setVisible}) => {
const  thought  = useSelector( (state) => state.thoughts )
const allThoughts = thought || []

let thoughtsLS =  JSON.parse(localStorage.getItem("thoughts")) || []; 

const navigate = useNavigate()

  const [formData, setFormData] = useState({
    _id:"",
    title:"",
    description:"",
    mood: "",
  });
  const {title,description,mood} = formData
  useEffect(() => {
    setFormData({_id: thoughtsLS.length +1  , ...thought})
   },[thought])

  const dispatch = useDispatch()

  const onChange = (e)=>{
    setFormData((prevState)=> ({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
}

const handleOk = async () => {
    await dispatch(addThought(formData))
    await setFormData(()=>({
        title:"",
        description:"",
        mood: "",
    }));
    await setVisible(false)
}

const handleCancel = () => {
    console.log("hey funciona el cancel")
    setVisible(false)
   };
   //   <div className="add-thought-form">
      {/* <form onSubmit={onSubmit}> */}
      {/* </form> */}
//   </div>;
  return (
      <Modal title="Add a thought" visible={visible} onOk={handleOk} onCancel={handleCancel}>
      <input
        value={title} 
        type="text"
        placeholder="title"
        onChange={onChange}
        name="title"
      />
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
