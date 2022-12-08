import './PortfolioItem.css'
import exit from './../doodles/exit.svg'
import Modal from 'react-bootstrap/Modal'
import { useEffect, useState } from 'react'

function PortfolioItem(props) {
  const [show, setShow] = useState(props.show)
  
  const handleClose = () => {
    setShow(false)
  }

  const handleShow = () => {
    setShow(true)
  }

  return (
    <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Header className='custom-modal-header' closeButton>
          <h3 className='modal-title'>{props.title}</h3>
          <img id='exit-doodle' src={exit}></img>
        </Modal.Header>
        <Modal.Body className='custom-modal-body'>
          <h4 className='modal-subtitle'>The Beginning—An Introduction</h4>
          <p className='modal-text'></p>
          <h4 className='modal-subtitle'>The Beginning—An Introduction</h4>
          <p className='modal-text'></p>
          <h4 className='modal-subtitle'>The End—Takeaways</h4>
          <p className='modal-text'></p>
        </Modal.Body>
      </Modal>
  )
}

export default PortfolioItem