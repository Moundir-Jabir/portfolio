import React from 'react'
import './modal.css'
function Modal({id,closeModal,description}) {
  return (
    <div className="modal_background">
        <div className="modal_container">
            <div className="modal_title" >
                <h3>Project Details</h3> 
            </div>
            <div className="modal_body" >
                <p>
                    {description}
                </p>
            </div>
            <div className='buttons' >
                <a className="btn" onClick={()=>closeModal(false)} >Close</a>
                <a href="#contact" className="btn btn-primary" onClick={()=>closeModal(false)} >More</a>
            </div>
        </div>
    </div>
  )
}

export default Modal