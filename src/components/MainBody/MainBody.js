import React from 'react';
import Modal from 'react-modal';
import ModalDonateBlood from './Modal/ModalDonateBlood';
import ModalRequestBlood from './Modal/ModalRequestBlood';
const MainBody = () => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [modal2, setModal] = React.useState(false)
    function openModal() {
      setIsOpen(true);
      console.log(modalIsOpen)
    }
    function openModal2() {
      setModal(true);
    }

    function afterOpenModal() {
      // references are now sync'd and can be accessed.
    //   subtitle.style.color = '#f00';
      
    }
   
    function closeModal(){
      setIsOpen(false);
    }
    function closeModal2(){
      setModal(false);
    }
    return (
        <div>
            <div className="row d-flex justify-content-center" style={{height: '75vh'}}>
                <div className="col-md-3 d-flex justify-content-between align-items-center">
                    <button className="btn btn-danger" onClick={openModal}><i class="fas fa-tint"></i> Donate Blood</button>
                    <button className="btn btn-success" onClick={openModal2}>Request for blood</button>
                </div>
            </div>
            {
                modalIsOpen &&
                <ModalDonateBlood afterOpenModal={afterOpenModal} closeModal = {closeModal} modalIsOpen={modalIsOpen} />
            }
            {
                modal2 &&
                <ModalRequestBlood closeModal2={closeModal2} modal2={modal2} />
            }
            
        </div>
    );
};

export default MainBody;