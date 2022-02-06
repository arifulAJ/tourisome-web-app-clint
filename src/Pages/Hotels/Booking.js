import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const [hotel,setHotel]=useState({});
    const {id}=useParams();
    useEffect(()=>{
        const url=`https://boiling-meadow-47168.herokuapp.com/hotels/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setHotel(data))
    },[]);
   
    return (
        <div>
           <div className='row row-cols-md-2 row-cols-1 backgrounds'>
                <div className='aboutitme'>
                    <h1>{hotel.title}</h1>
                </div>
                <div  className=''>
                    <img style={{height:'70vh',width:'100vw'}} className='img-fluid' src={hotel.url} alt="" />
                </div>

            </div>
            
        </div>
    );
};

export default Booking;