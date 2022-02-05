import React from 'react';
import { Link } from 'react-router-dom';

const HotelsCard = ({hotel}) => {
    const {url,title,infoHotel,price,_id}=hotel;
    
    return (
        <div>
           <div class="col">
                <div class="card mb-3" style={{maxWidth: "640px"}}>
                    <div class="row g-0">
                        <div class="col-md-6">
                        <img style={{height:'100%'}}  src={url} class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-6">
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{infoHotel}</p>
                           
                            <p><span className='textall'>${price}</span> -per night</p>
                            <Link to={`/booking/${_id}`}><button className='boking'> Booking now</button></Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>  
        </div>
    );
};

export default HotelsCard;