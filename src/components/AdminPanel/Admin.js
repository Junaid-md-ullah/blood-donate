import React, { useEffect, useState } from 'react';
import DonorCard from './DonorCard';

const Admin = () => {
    const [allDonors,setDonors] = useState([]);

    useEffect(()=>{
        fetch("https://jsonkeeper.com/b/7EMD")
        .then(res=> res.json())
              .then(( data ) => {
                  setDonors(data.donors);
              });
              
    },[])
    return (
        <div className="row d-flex justify-content-around mt-4">
            {
               allDonors.length>0 ? allDonors.map(donor=>
                    <DonorCard key={donor.id} datas={donor} />
                ):
                <p>Loading...</p>
            }
        </div>
    );
};

export default Admin;