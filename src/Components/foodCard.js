import { useState } from 'react';
import './foodCard.css'
// import add from '../images/buttonAdd.svg'
// import remove from '../images/buttonRemove.svg'

function FoodCard(props){

    const [currentQty,setNewQty] = useState(0);
    const [invisible,setInvisible] = useState(true);

    const addDish=()=>{
        setNewQty(currentQty+1);
        setInvisible(false);
    }
    
    const removeDish=()=>{
        if(currentQty>0){
            setNewQty(currentQty-1);
        }
        if(currentQty===1){
            setInvisible(true);
        }

    }
    return(
        <div className='wrap--foodCard'>
        
            <img src={props.location} alt='Food' className='foodImage'></img>
            {/* <div className='discountTag'> 20%</div> */}
            <div className='foodAbout'>
                <div class="foodAboutDetails">
                    <p className='foodName'>{props.foodName}</p>
                    <p className='foodPrice'>₹ {props.price} </p>
                </div>
                <div class="foodAboutReviews">
                    <p className='foodRating'>⭐ {props.star}</p>
                    <p className='foodTiming'>{props.arivalTime}</p>
                    <div className={invisible?'dishAmount ':'dishAmount dishAmountBorder'}>
                {/* <button onClick={removeDish} className={invisible?'removeDish':''}><img src={remove} alt='Remove Button' /></button> */}
                        <button onClick={removeDish} className={invisible?'removeDish':''}>-</button>
                        <p className={invisible?'qtyDish qtyDishAppearance':'qtyDishAppearance'}>{currentQty}</p>
                        {/* <button onClick={addDish} className='addDish'><img src={add} alt='Add Button' /> </button> */}
                        <button onClick={addDish} className='addDish'>+ </button>
                    </div>
                    
                </div>

            </div>
        </div>
    );
}


export default FoodCard