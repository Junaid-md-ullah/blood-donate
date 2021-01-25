import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";


const ModalDonateBlood = ({modal2, closeModal2, afterOpenModal}) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const[donatedBefore, setDonatedBefore] = useState();
  const [alreadyDonated, setAlreadyDonated] = useState(false)
  const onSubmit = data =>{
    
  };

  function checkDonor(e){
    var matches = donatedBefore.includes(e.target.value);
    if(matches){
      setAlreadyDonated(true);
    }else{
      setAlreadyDonated(false)
    }
  }

  useEffect(()=>{
    fetch("https://jsonkeeper.com/b/NKZY")
    .then(res=> res.json())
          .then(( data ) => {
              setDonatedBefore(data.donatedBlood);
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
          isOpen={modal2}
          onRequestClose={closeModal2}
          style={customStyles}
          contentLabel="Example Modal"
        >
            <div className="p-2 mb-3" style={{backgroundColor: '#FFD0D1'}}>
              <p className="my-auto"><strong>Provide All the necessary information</strong></p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center">
            {
                alreadyDonated ?   <h4 style={{color:'green'}}>Please Check your email</h4> : <span></span> 
              }
              <input name="patientName" className="mb-3" defaultValue="" placeholder="Patient Name" ref={register({ required: true })} />
              {errors.patientName && <span>This field is required</span>}
            
              <input name="mobile" className="mb-3" defaultValue="" placeholder="Mobile No." ref={register({ required: true })} onChange={checkDonor} />
              {errors.mobile && <span>This field is required</span>}
          

              <input name="alterMobile" className="mb-3" defaultValue="" placeholder="Alternative Mobile No." ref={register({ required: true })} />
              {errors.alertMobile && <span>This field is required</span>}

              <input name="relation" className="mb-3" defaultValue="" placeholder="Relationship with patient" ref={register({ required: true })} />
              {errors.relation && <span>This field is required</span>}

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
        
                {errors.blood && <span>This field is required</span>}
              </div>
              
            
                <div className="d-flex flex-column mb-3 w-50">
                <label for="address"><strong>Present Address:</strong></label>
                    <textarea id="address" className="" name="address" placeholder="Address" ref={register({ required: true })}></textarea>

                    {errors.address && <span>This field is required</span>}
                </div>

            <div className="d-flex w-50 mb-3">
                    <input name="union" defaultValue="" className="w-50 mr-2" placeholder="Union" ref={register({ required: true })} />
                    {errors.union && <span>This field is required</span>}

                    <input name="postOffice" defaultValue=""  className="w-50" placeholder="Post Office" ref={register({ required: true })} />
                    {errors.postOffice && <span>This field is required</span>}
                </div>

                <div className="d-flex w-50 mb-3">
                    <input name="pstation" defaultValue="" className="w-50 mr-2" placeholder="Police Station" ref={register({ required: true })} />
                    {errors.pstation && <span>This field is required</span>}

                    <input name="district" defaultValue=""  className="w-50" placeholder="District" ref={register({ required: true })} />
                    {errors.district && <span>This field is required</span>}
                </div>


              <div className="d-flex justify-content-around w-50">
                <label for="date"><strong>Select Date:</strong></label>
                <input type="date" id="date" className="mb-3" name="dob" placeholder="Date Of Birth" ref={register({ required: true })} />
    
                {errors.dob && <span>This field is required</span>}
              </div>
              

              <div className="d-flex justify-content-between w-50">
                <label for="time"><strong>Select Time:</strong></label>
                <input type="time" id="time" className="mb-3" name="dob" placeholder="Date Of Birth" ref={register({ required: true })} />
    
                {errors.dob && <span>This field is required</span>}
              </div>

              
              <input type="submit" className="btn btn-success w-50 mb-3" />
              <button className="btn btn-danger w-50" onClick={closeModal2}>close</button>
        
          </form>
        </Modal>
    </div>
  );
};

export default ModalDonateBlood;

// {"donatedBlood":["joey@gmail.com","monica@gmail.com","rachel@gmail.com"]}