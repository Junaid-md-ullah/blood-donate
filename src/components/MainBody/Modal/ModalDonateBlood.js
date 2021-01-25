import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";


const ModalDonateBlood = ({modalIsOpen, closeModal, afterOpenModal}) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const[oldDonors, setOldDonors] = useState();
  const [alreadyExist, setAlreadyExist] = useState(false)
  const onSubmit = data =>{

  };

  function checkOldDonor(e){
    var matches = oldDonors.includes(e.target.value);
    if(matches){
      setAlreadyExist(true);
    }else{
      setAlreadyExist(false)
    }
  }

  useEffect(()=>{
    fetch("https://jsonkeeper.com/b/MAHA")
    .then(res=> res.json())
          .then(( data ) => {
              setOldDonors(data.alreadyDonated);
              
          });
  },[])

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
 
 
  return (
    <div>
          
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
            <div className="p-2 mb-3" style={{backgroundColor: '#FFD0D1'}}>
              <p className="my-auto"><strong>Provide All the necessary information</strong></p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center">

              {
                alreadyExist ? <h4 style={{color:'red'}}>You Already donated blood, please donate after 90 days</h4> : <span></span>
              }

              <input name="name" className="mb-3" defaultValue="" placeholder="Name" ref={register({ required: true })} />
            
            
              <input name="mobile" className="mb-3" defaultValue="" placeholder="Mobile No." ref={register({ required: true })} />
        

              <input name="alterMobile" className="mb-3" defaultValue="" placeholder="Alternative Mobile No." ref={register({ required: true })} />
           
    

              <input name="email" className="mb-3" defaultValue="" placeholder="Email" ref={register({ required: true })} onChange={checkOldDonor} />
             

              <div className="d-flex justify-content-between w-50 mb-3">
                <label htmlFor="blood"><strong>Select Blood Group:</strong></label>
                <select name="blood" id="blood" ref={register}>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
        
                
              </div>

              <input name="weight" className="mb-3" placeholder="Weight" ref={register({ required: true })} />
  
              
                   
              <input name="religion" type="text" className="mb-3" placeholder="Religion" ref={register({ required: true })} />
      
            
              
              <div className="d-flex flex-column mb-3 w-50">
                <label for="address"><strong>Present Address:</strong></label>
                    <textarea id="address" className="" name="address" placeholder="Address" ref={register({ required: true })}></textarea>

                </div>
                <div className="d-flex w-50 mb-3">
                    <input name="union" defaultValue="" className="w-50 mr-2" placeholder="Union" ref={register({ required: true })} />
          

                    <input name="postOffice" defaultValue=""  className="w-50" placeholder="Post Office" ref={register({ required: true })} />
            
                </div>

                <div className="d-flex w-50 mb-3">
                    <input name="pstation" defaultValue="" className="w-50 mr-2" placeholder="Police Station" ref={register({ required: true })} />
            

                    <input name="district" defaultValue=""  className="w-50" placeholder="District" ref={register({ required: true })} />
                
                </div>



              <div className="d-flex justify-content-around w-50">
                <label for="dob"><strong>Date Of Birth:</strong></label>
                <input type="date" id="dob" className="mb-3" name="dob" placeholder="Date Of Birth" ref={register({ required: true })} />
    
               
              </div>

              
              <input type="submit" className="btn btn-success w-50 mb-3" />
              <button className="btn btn-danger w-50 mb-3" onClick={closeModal}>close</button>
          </form>
        </Modal>
    </div>
  );
};

export default ModalDonateBlood;

// {"alreadyDonated":["man@gmail.com","woman@gmail.com","ross@gmail.com"]}