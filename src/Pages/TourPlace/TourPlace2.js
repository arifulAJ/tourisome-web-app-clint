import React from 'react';
import './TourPlace1.css'

const TourPlace2 = () => {
    return (
        <div>
         <div className='imagefixt  mb-5 mt-5'>
         <img src="https://sktthemesdemo.net/trip/wp-content/themes/thetrip/images/default-header-img.jpg" alt="" />
         </div>
         <div className='row row-cols-md-2 row cols-1   container-fluid pt-5  pb-5'>
             <div className='toreplace1'>
                 <h1>Wildlife Tours</h1>
                 <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                 <button className='buttons'> Book now</button>

             </div>
             <div className=' pt-2 '>
                 <img className=' img-fluid' src="https://blog.ipleaders.in/wp-content/uploads/2020/05/703992-wildlife-sanctuary.jpg" alt="" />
             </div>
         </div>
         {/* sjdhfkjsh */}
         <div class="accordion d-flex" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
       Description
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
      <div className='container mx-auto pt-5'>
             <h1>Description</h1>
             <p>Duis venenatis vestibulum eros, a consequat orci. Nam vel massa sed lacus laoreet vulputate. Sed euismod, tellus a ullamcorper vehicula, mi augue pulvinar ligula, fringilla commodo magna ligula a dui.</p>
             <ul>
                 <li>Fusce viverra porta massa eu lobortis</li>
                 <li>Proin vitae orci ultrices, hendrerit purus ut</li>
                 <li>Etiam placerat nunc lacus</li>
                 <li>Phasellus egestas nulla eget sem lacinia</li>
                 <li>Sed id maximus erat, non porttitor ligula</li>
             </ul>
             <h2>Highlights</h2>
             <ul>
                 <li>Fusce viverra porta massa eu lobortis</li>
                 <li>Proin vitae orci ultrices, hendrerit purus ut</li>
                 <li>Etiam placerat nunc lacus</li>
                 <li>Phasellus egestas nulla eget sem lacinia</li>
                 <li>Sed id maximus erat, non porttitor ligula</li>
             </ul>
         </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      Includes And excludes
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
       <h1>What is included?</h1>
       <ul>
           <li>Proin tincidunt, leo eget vestibulum dictum</li>
           <li>felis lorem ultricies felis, non pretium ipsum dolor ut</li>
           <li>Aliquam eu tellus vitae metus sagittis aliquet</li>
           <li>hasellus quis ultricies metus</li>
           <li>Proin vel tellus eget quam finibus ultrices.</li>
           <li>Mauris nec molestie dui, ut condimentum odio.</li>
       </ul>
       <h1>What is excluded?</h1>
       <ul>
           <li>Aliquam eu tellus vitae metus sagittis aliquet</li>
           <li>hasellus quis ultricies metus</li>
           <li>Proin vel tellus eget quam finibus ultrices.</li>
           <li>Mauris nec molestie dui, ut condimentum odio.</li>
           <li>uisque aliquet dolor velit, sed pellentesque libero condimentum eget.
           </li>
       </ul>
      </div>

    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      photos
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtTRXe9LQsDf7HPDTN8MV3gntgB67IcoLuaA&usqp=CAU" alt="" />
      </div>
    </div>
  </div>
</div>
       
        
        </div>
    );
};

export default TourPlace2;