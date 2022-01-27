import React from 'react';
import './Foote.css'
const Footer = () => {
    return (
        <div className='footerfat mt-5'>
            <div className='row row-cols-md-3 row-cols-1 text-white alignIte'>
                <div className='text-white'>
                    <h3>About us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deleniti expedita adipisci, maxime ab est minus? Voluptas nulla, omnis iure illo itaque ab quos, tempora, excepturi similique assumenda consequatur veniam!</p>
                </div>
                <div>
                   <h3>Quick link</h3>
                   <ul className='fontLink'>
                       <li><a href="https://www.facebook.com/profile.php?id=100025248092230">  <i class="fab fa-facebook-square"> Facebook</i></a></li>
                       <li><a href="https://wa.me/01872297660"><i class="fab fa-whatsapp-square"> Whatsapp</i></a>  </li>
                       <li><a href="https://www.instagram.com/ariful_islam_1011/"><i class="fab fa-instagram"> Instagram</i></a></li>
                       <li><a href="https://twitter.com/ArifulI75306060"><i class="fab fa-twitter-square">Twitter</i></a></li>
                     
                   </ul>
                </div>
                <div>
                    <h3>Business Hour</h3>
                    <p> <span  >Monday-Friday:</span> <span className='mx-3'>9am - 5pm.</span></p>
                    <hr className="linebrack" />
                    <p> <span>Saturday:</span> <span className='mx-3'>10am - 2pm.</span></p>
                    <hr className="linebrack" />
                    <p> <span>Sunday:</span> <span className='mx-5'>closed.</span></p>
                    <hr className="linebrack" />
                </div>
            </div>
            <p className='text-white text-center p-5'>Copyright <i class="fas fa-copyright"></i> 2018. All rights reserved.</p>
        </div>
    );
};

export default Footer;