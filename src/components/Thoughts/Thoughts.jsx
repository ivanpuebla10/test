import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addThought, getThoughts } from '../../features/thought/thoughtSlice';
import Header from '../Header/Header';
import Home from './Home/Home';
import Thought from './Thought/Thought'
import './Thoughts.scss';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

const Thoughts = () => {
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
    await setIsOpen(false);
    await navigate("/thought/" + _id)
}

useEffect( () => {
      dispatch(getThoughts());
    }, []);
    const [modalIsOpen, setIsOpen] = useState(false);

const openModal =() => {
      setIsOpen(true);
    }
  
const closeModal=() => {
      setIsOpen(false);
      setFormData({ 
        _id: allThoughts.thoughts.length+1,
        title:"",
        description:"",
        mood: "",
      })
}

  return (
    <div className="thoughts_container">
        {thoughts?.thoughts?.length>0 ? 
        <>
        <Header/>
        <Modal
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <form className="addThought" >
      <label>How are you feeling?</label>
      <select value={mood} name="mood" onChange={onChange} required>
      <option value="value1">I'm feeling...</option>
  <option value="Happy">Happy</option>
  <option value="Neutral">Neutral</option>
  <option value="Sad">Sad</option>
</select>
      <label>What is going through your head right now?</label>
      <textarea
        value={title} 
        type="text"
        onChange={onChange}
        name="title"
        required
      />
      <label>Is there any evidence your thought is true?</label>
      <textarea
        value={description} 
        type="text"
        onChange={onChange}
        name="description"
        required
      />
      </form>
      <button className="cancel-button" onClick={closeModal}>Cancel</button>
      <button className="done-button" onClick={handleOk}>DONE</button>
      </Modal>
        <Thought/>
        <button className="add_button" onClick={() => openModal()}>ADD A THOUGHT</button>
        </>
         : 
      <>
      <Header/>
      <Home /> 
      <Modal
      className="modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <form className="addThought" >
      <label>How are you feeling?</label>
      <select value={mood} name="mood" onChange={onChange} required>
      <option value="value1">I'm feeling...</option>
  <option value="Happy">Happy</option>
  <option value="Neutral">Neutral</option>
  <option value="Sad">Sad</option>
</select>
      <label>What is going through your head right now?</label>
      <textarea
        value={title} 
        type="text"
        onChange={onChange}
        name="title"
        required
      />
      <label>Is there any evidence your thought is true?</label>
      <textarea
        value={description} 
        type="text"
        onChange={onChange}
        name="description"
        required
      />
      </form>
      <button className="cancel-button" onClick={closeModal}>Cancel</button>
      <button className="done-button" onClick={handleOk}>DONE</button>
      </Modal>
        <Thought/>
        <button className="add_button" onClick={() => openModal()}>ADD A THOUGHT</button>
      </>
        }
        
    </div>
  )
}

export default Thoughts