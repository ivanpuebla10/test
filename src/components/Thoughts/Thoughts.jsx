import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addThought, getThoughts } from '../../features/thought/thoughtSlice';
import Header from '../Header/Header';
import { AddThought } from './AddThought/AddThought';
import Home from './Home/Home';
import Thought from './Thought/Thought'
import './Thoughts.scss';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

const Thoughts = ({visible, setVisible}) => {
const [isModalVisible, setIsModalVisible] = useState(false);
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
        // await navigate("/thought/" + _id)
}

useEffect( () => {
      dispatch(getThoughts());
    }, []);
    const [modalIsOpen, setIsOpen] = useState(false);

const openModal =() => {
      setIsOpen(true);
    }
  
// const afterOpenModal=() => {
//       // references are now sync'd and can be accessed.
//     }
  
const closeModal=() => {
      setIsOpen(false);
}

  return (
    <div className="thoughts_container">
        {thoughts?.thoughts?.length>0 ? 
        <>
        <Modal
        className="modal"
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      >
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
      <button onClick={closeModal}>close</button>
      <button onClick={handleOk}>Done</button>
      </Modal>
        {/* <AddThought visible={isModalVisible} setVisible={setIsModalVisible} onOk={handleOk} onCancel={handleCancel}/> */}
        <Thought/>
        <button className="add_button" onClick={() => openModal()}>ADD A THOUGHT</button>
        </>
         : 
      <>
      <Header/>
      {/* <AddThought visible={isModalVisible} setVisible={setIsModalVisible} onOk={handleOk} onCancel={handleCancel}/> */}
      <Home /> 
      <Modal
      className="modal"
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      >
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
      <button onClick={closeModal}>close</button>
      <button onClick={handleOk}>Done</button>
      </Modal>
        {/* <AddThought visible={isModalVisible} setVisible={setIsModalVisible} onOk={handleOk} onCancel={handleCancel}/> */}
        <Thought/>
        <button className="add_button" onClick={() => openModal()}>ADD A THOUGHT</button>
      {/* <button className="add_button" onClick={() => showModal()}>ADD A THOUGHT</button>       */}
      </>
        }
        
    </div>
  )
}

export default Thoughts