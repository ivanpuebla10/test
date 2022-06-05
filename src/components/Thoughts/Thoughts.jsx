import { useState } from 'react';
import { AddThought } from './AddThought/AddThought';
import Thought from './Thought/Thought'
import './Thoughts.scss';

const Thoughts = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
      };
  return (
    <div className="thoughts_container">
        <Thought/>
        <AddThought visible={isModalVisible} setVisible={setIsModalVisible}/>
        <button onClick={() => showModal()}>ADD A THOUGHT</button>
    </div>
  )
}

export default Thoughts