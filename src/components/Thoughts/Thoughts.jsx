import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getThoughts } from '../../features/thought/thoughtSlice';
import { AddThought } from './AddThought/AddThought';
import Home from './Home/Home';
import Thought from './Thought/Thought'
import './Thoughts.scss';

const Thoughts = () => {
  const dispatch = useDispatch();
  const thoughts = useSelector((state) => state.thought);
  const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect( () => {
      dispatch(getThoughts());
    }, []);

    const showModal = () => {
        setIsModalVisible(true);
      };

    const handleOk = async () => {
        await setIsModalVisible(false)
    }
    const handleCancel = async () => {
      await setIsModalVisible(false)

  }
  return (
    <div className="thoughts_container">
        {thoughts?.thoughts?.length>0 ? 
        <>
        <AddThought visible={isModalVisible} setVisible={setIsModalVisible} onOk={handleOk} onCancel={handleCancel}/>
        <Thought/>
        <button onClick={() => showModal()}>ADD A THOUGHT</button>
        </>
         : 
      <>
      <AddThought visible={isModalVisible} setVisible={setIsModalVisible} onOk={handleOk} onCancel={handleCancel}/>
      <Home /> 
      <button onClick={() => showModal()}>ADD A THOUGHT</button>      
      </>
        }
        
    </div>
  )
}

export default Thoughts