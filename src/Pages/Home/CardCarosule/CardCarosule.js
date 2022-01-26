import React from 'react';
import "./CardCarasule.css"

const CardCarosule = () => {
    return (
        <>

        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active CardCaruso text-white">

      <div className='textEfact '>
        <p>Beach Resort</p>
          <h1>Bora Island</h1>
          <p>Good Place for Vacation & Enjoyment</p>
          <button> Read more</button>
        </div>
    </div>
    <div class="carousel-item CardCaruso2 text-white">
     
      <div className='textEfact '>
        <p>Beach Resort</p>
          <h1>Thailand tour</h1>
          <p>Good Place for Vacation & Enjoyment</p>
          <button> Read more</button>
        </div>
    </div>
    <div class="carousel-item CardCaruso3 text-white">
      
      <div className='textEfact '>
        <p>Beach Resort</p>
          <h1>Maldives Island</h1>
          <p>Good Place for Vacation & Enjoyment</p>
          <button> Read more</button>
        </div>
    </div>
    
  </div>
  {/* <button class="carousel-control-prev" type="" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button> */}
  {/* <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
</div>
        </>

    );
};

export default CardCarosule;