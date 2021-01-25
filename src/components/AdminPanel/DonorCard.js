import React from 'react';

const DonorCard = (props) => {
    console.log(props)
    return (
                
                    <div class="card col-md-4 mb-4" style={{maxWidth:'26.333333%'}}>
                    <div class="card-body">
                        <h5 class="card-title">Blood Donor Name: {props.datas.name}</h5>
                        <div>
                            <label htmlFor="date">Set Donation Date:</label>
                            <input type="date" id="date"/>
                            <button className="btn btn-primary mt-2">Save</button>
                        </div>
                    </div>
                    </div>
             
 
    );
};

export default DonorCard;