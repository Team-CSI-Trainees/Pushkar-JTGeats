import './kitchenSection.css';
import React from 'react';
import data from './imageData'

function KitchenSection(){
    


    return(
        <div className="wrap--kitchenSection">
            <div className='wrap--kitchen'>
                <h2>Home Kitchen</h2>
                <div className='kitchenSection'>
                    {data}
                </div>
            </div>
        </div>
    );
}

export default KitchenSection


