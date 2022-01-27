import React from 'react';
import { Link } from 'react-router-dom';
import './Tours.css'

const Tours = () => {
    return (
        <div className='backImage mb-5' id='tours'>
       <div className='textSerche'>
           <h1>Search</h1>
           <p>Tours by types</p>
        </div>  
        <div class="row row-cols-1  row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4 container-fluid">
  <div class="col">
      <Link className='linkrout' to="/topten">
    <div class="card systemof pt-2">
      <img src="https://sktthemesdemo.net/trip/wp-content/uploads/2020/10/tour-icon1.jpg" class="card-img-top imagesize " alt="..."/>
      <div class="card-body">
      <p class="cardtext">Adventure <br /> Tours</p>
        
      </div>
    </div></Link>
  </div>
  <Link className='linkrout' to="/topten2">
  <div class="col">
    <div class="card systemof pt-2">
      <img src="https://sktthemesdemo.net/trip/wp-content/uploads/2020/10/tour-icon2.jpg" class="card-img-top imagesize" alt="..."/>
      <div class="card-body">
      <p class="cardtext">Wildlife <br /> Tours</p>
      </div>
    </div>
  </div>
  </Link>
  <Link className='linkrout' to="/topten3">
  <div class="col">
    <div class="card systemof pt-2">
      <img src="https://sktthemesdemo.net/trip/wp-content/uploads/2020/10/tour-icon3.jpg" class="card-img-top imagesize" alt="..."/>
      <div class="card-body">
      <p class="cardtext">Sightseeing  <br /> Tours</p>
      </div>
    </div>
  </div>
  </Link>
  <Link className='linkrout' to="/topten4">
  <div class="col">
    <div class="card systemof pt-2">
      <img src="https://sktthemesdemo.net/trip/wp-content/uploads/2020/10/tour-icon4.jpg" class="card-img-top imagesize" alt="..."/>
      <div class="card-body">
      <p class="cardtext">Paragliding <br /> Tours</p>
      </div>
    </div>
  </div>
  </Link>
  <Link className='linkrout' to="/topten5">
  <div class="col">
    <div class="card systemof pt-2">
      <img src="https://sktthemesdemo.net/trip/wp-content/uploads/2020/10/tourtype-icon5.jpg" class="card-img-top imagesize" alt="..."/>
      <div class="card-body">
      <p class="cardtext">Hang Gliding <br /> Tours</p>
      </div>
    </div>
  </div>
  </Link>
</div>
       
       </div>
       
        
    );
};

export default Tours;