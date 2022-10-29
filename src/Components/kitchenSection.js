import './kitchenSection.css';
import React from 'react';
import FoodCard from './foodCard';


function KitchenSection(){
    


    return(
        <div className="wrap--kitchenSection">
            <div className='wrap--kitchen'>
                <h2>Home Kitchen</h2>
                <div className='kitchenSection'>
                    {/* {imageData} */}
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                </div>
            </div>
        </div>
    );
}

export default KitchenSection


