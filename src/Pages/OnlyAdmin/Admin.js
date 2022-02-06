import React, { useRef } from 'react';
import './Admin.css'

const Admin = () => {
    const urlRef=useRef();
    const titleRef=useRef();
    const areaRef=useRef();
    const numberRef=useRef();
    const handelHotelForm=e=>{
        e.preventDefault();
        const url=urlRef.current.value;
        const title=titleRef.current.value;
        const infoHotel=areaRef.current.value;
        const price=numberRef.current.value;
      
        const hotelsInfo={url,title,infoHotel,price};
        console.log(hotelsInfo);
        fetch('https://boiling-meadow-47168.herokuapp.com/hotels',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(hotelsInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert("Successfully added ");
               e.target.reset()

            }
        })
    }
    return (
        <div className=''>
             <div className='row row-cols-md-2 row-cols-1 backgrounds'>
             <div className='aboutitme'>
                    <h1>The area of handel this website</h1>
                </div>
                <div className='borderSite'>
                    <img className='img-fluid' src="https://st2.depositphotos.com/1002277/5515/i/600/depositphotos_55150353-stock-photo-admin-cubics.jpg" alt="" />
                </div>
               

            </div>
            {/* hotel api post  */}
            <div className='hotelsArea'>
                <h1 className='text-center pt-5'>Submit the hotels information</h1>
                <form onSubmit={handelHotelForm}>
                    <input type="text" name="" id="" placeholder='pleace insert Image url' ref={urlRef} />
                    <input type="text" name="" id="" placeholder='pleace insert Title' ref={titleRef} />
                    <textarea type="text" name="" id="" placeholder='pleace insert about the hotel' ref={areaRef} />
                    <input type="number" name="" id="" placeholder='hotel cost per night' ref={numberRef} />
                    <input type="submit" value="submit the inform" />
                   
                </form>
            </div>
            
        </div>
    );
};

export default Admin;