import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
              <div className='row row-cols-md-2 row-cols-1 backgrounds'>
                <div className='aboutitme'>
                    <h1>Contact with us</h1>
                </div>
                <div className='borderSite'>
                    <img className='img-fluid' src="https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" alt="" />
                </div>

            </div>
            <div className='grid pt-5'>
                <div className='row row-cols-md-4 row-cols-1 container mx-auto g-5 pt-5'>
                    <div className='boxtext'>
                    <i class="fas fa-phone-square-alt fotwasom"></i>
                    <h2>Make A Call</h2>
                    <p>+8801578452155</p>
                    <p>+88015784521505</p>

                    </div>
                    <div className='boxtext'>
                    <i class="fas fa-envelope-open-text fotwasom"></i>
                    <h2>Send A Mail</h2>
                    <p>info@examples.com</p>
                    <p>info@examples.com</p>

                    </div>
                    <div className='boxtext'>
                    <i class="fas fa-map-marker-alt fotwasom"></i>
                    <h2>Find Us</h2>
                    <p>123 Mohakhali  dhaka </p>
                    <p>Bangladesh</p>

                    </div>
                    <div>

                    </div>

                </div>
            </div>
            <div style={{background:"#F5FDFF"}}>
                <h1 className='text-center bolder pt-5 pb-5'> Have any Question</h1>
                <div className='w-50 mx-auto '>
                    <form action="">
                        <input className='firstname' type="text" name="" id="" placeholder='First name' />
                        <input className='firstname' type="text" name="" id="" placeholder='Last name' /><br />
                        <input className='pass' type="email" name="" id="" placeholder='Email Address' /><br />
                        <textarea className='pass' name="" id="" cols="30" rows="10" placeholder='Your comment '></textarea>
                    </form>
                    <p className='text-center asbutton'>Send Meassage</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;