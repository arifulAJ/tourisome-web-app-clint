import React from 'react';

const Career = () => {
    return (
        <div className='mt-5'>
           <div className='text-center pb-2'>
           <h1>LET'S JOIN WITH US!</h1>
            <p className='w-75 mx-auto pt-5'>Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, blandit torquent, odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat.</p>
           </div>
            <div className='row container-fluid  pt-5 ' >
                <div className='col-lg-8 '>
                 <div className='row row-cols-md-2 row-cols-1 mx-auto
                g-3 container overflow-hidden '>

                <div className='col'>
                <div class="card   " >
                <div class="card-body">
                <h5 class="card-title">Full Time / Part Time</h5>
                <h2>Travel Agent</h2>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                </div>

                <div className='col'>
                <div class="card   " >
                <div class="card-body">
                <h5 class="card-title">Full Time / Part Time</h5>
                <h2>Travel Instracter</h2>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                </div>
                <div className='col'>
                <div class="card   " >
                <div class="card-body">
                <h5 class="card-title">Full Time / Part Time</h5>
                <h2>Travel place</h2>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                </div>
                <div className='col'>
                <div class="card   " >
                <div class="card-body">
                <h5 class="card-title">Full Time / Part Time</h5>
                <h2>Travel with messi</h2>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                </div>
                <div className='col'>
                <div class="card   " >
                <div class="card-body">
                <h5 class="card-title">Full Time / Part Time</h5>
                <h2>Travel the natural </h2>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                </div>
              
                 </div>
                </div>

                <div className='col-lg-4 p-5 '>
                   <div className='container mx-auto rounded' style={{background:"#A49A79"}}>
                   <h5 className='text-center'>This is the meassage section</h5>
                   <form action="">
                       <label htmlFor="fname"> your Name</label> <br />
                       <input type="text" name="fname" id="fname" /><br />
                       <label htmlFor="email"> your Email</label> <br />
                       <input type="email" name="email" id="email" /><br />
                       <label htmlFor="message"> Send meassage with feedback</label> <br />
                       <textarea name="message" id="message" cols="30" rows="10"></textarea>
                   </form>
                   
                   </div>
                
                </div>
               
            </div>
        </div>
    );
};

export default Career;