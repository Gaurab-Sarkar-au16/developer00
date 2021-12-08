import { useState } from 'react'
import Modal from '../components/Modal'
import Backdrop from '../components/Backdrop'

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function deleteHandler() {
    setModalIsOpen(true)
  }

  function closeModalHandler() {
    setModalIsOpen(false)
  }
  
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {/* {modalIsOpen ? <Modal /> : null}      
      {modalIsOpen ? <Backdrop /> : null} */}
      {/* if both the values are true then second value is returned */}
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> }      
      {modalIsOpen && <Backdrop onCancel={closeModalHandler}/> }     
    </div>
  );
}

export default Todo;
