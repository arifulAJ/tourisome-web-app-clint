import React, { useEffect, useState } from 'react';
import './Hotels.css'
import HotelsCard from './HotelsCard';

const Hotels = () => {
    const [hotels,setHotels]=useState([]);
    useEffect(()=>{
        fetch('https://boiling-meadow-47168.herokuapp.com/hotels')
        .then(res=>res.json())
        .then(data=>setHotels(data))
    },[])
    return (
        <div>
               <div className='row row-cols-md-2 row-cols-1 backgrounds'>
                <div className='aboutitme'>
                    <h1>Hotels </h1>
                </div>
                <div className='borderSite'>
                    <img className='img-fluid' src="https://media.istockphoto.com/photos/resort-swimming-pool-picture-id119926339?k=20&m=119926339&s=612x612&w=0&h=ZwlRCnn9ZTvysi4R26gJyFr1-V0F0qSXQbK0boV-VO8=" alt="" />
                </div>

            </div>
            <div>
                <div className='text-center pt-5 pb-5 '>
                    <h1 >POPULAR HOTELS</h1>
                    <p>Sorem ipsum dolor sit amet, consectetur adipisicing Suscipit votas aperiam Sorem ipsum dolor consectur adipisicing elit.</p>
                </div>
                <div class="container px-4">
                <div className='row row-cols-lg-2 row-cols-1  gx-3 '>
                    {
                        hotels.map(hotel=> <HotelsCard 
                        key={hotel._id}
                        hotel={hotel}
                        ></HotelsCard>)

                    }
                
                
                </div>
           </div>
        </div>
        </div>
    );
};

export default Hotels;