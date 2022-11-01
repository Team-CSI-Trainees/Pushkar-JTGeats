import './kitchenSection.css';
import React, { useState } from 'react';
import data from './imageData'
import Carousel from './carousel';
import Button from './button'
import InputBox from './inputBox'
// import FoodCard from './foodCard';
// import dish1 from '../DishImages/dish1.png';

function KitchenSection(){
    const [visible,setVisible]= useState(false);
    const displayRequestBox=()=>{
        setVisible(true);
    }

    return(
        <div className="wrap--kitchenSection">
            <div className='wrap--kitchen'>
                <h2>Home Kitchen</h2>
                <div className='kitchenSection'>
                    {data}
                </div>
            </div>
            
                <div className=''>
                    <h2 className='carouselHeading'>Popular Items</h2>
                    <div class="wrap--carousel">
                        <Carousel show={3}>
                            {data}
                        </Carousel>
                    </div>
                    {/* <div class="wrap--requestBtn"><Button class='green' text='Request a dish'/></div> */}
                    <div class="wrap--requestBtn"><button className='green' onClick={displayRequestBox} >Request a dish</button></div>
                </div>
            

            {/* REQUESTING A DISH  */}
            <section className={visible?'wrap--request':'requestInvisible wrap--request'}>
                <h2 className='requestHeading'>Request a Dish</h2>
                <form action="" className='requestBox'>
                    <div className='wrap--requestInput'>
                        <label>Name*</label>
                        <InputBox text='Enter name of the dish' class='requestInput' />
                    </div>
                    <div class="wrap--requestInput">
                        <label>Upload an image</label>
                        <InputBox text='Paste a URL' class='requestInput' />
                    </div>
                    <div class="requestBoxBtn">
                        <button  className='requestBtn'>Cancel</button>
                        <button className='requestBtn' type='submit'>Submit Request</button>
                    </div>
                </form>
                
            </section>
        </div>
    );
}

export default KitchenSection


