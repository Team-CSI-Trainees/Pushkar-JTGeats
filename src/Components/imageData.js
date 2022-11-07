import pizza2 from '../DishImages/pizza2.png';
import pizza1 from '../DishImages/pizza1.png';
import pizza3 from '../DishImages/pizza3.png';
import pizza4 from '../DishImages/pizza4.png';
import pizza5 from '../DishImages/pizza5.png';
import pizza6 from '../DishImages/pizza6.png';
import pizza7 from '../DishImages/pizza7.png';
import pizza8 from '../DishImages/pizza8.png';
import dish1 from '../DishImages/dish1.png';
import dish2 from '../DishImages/dish2.png';
import FoodCard from './foodCard';
import { useEffect, useState } from 'react';
// import AddedCartItem from './addedCartItem';
// import { useEffect } from 'react';
// import { useEffect, useState } from 'react';

const imageData = [{
    location: pizza1,
    foodName:'Home Made Pizza',
    price: 190,
    star: 4.8,
    arivalTime: '50-90 mins',
    id:1
},{
    location: pizza2,
    foodName:'Home Made Pizza',
    price: 190,
    star: 4.8,
    arivalTime: '50-90 mins',
    id:2
},{
    location: pizza3,
    foodName:'Home Made Pizza',
    price: 190,
    star: 4.8,
    arivalTime: '50-90 mins',
    id:3
},
{
    location: pizza3,
    foodName:'Home Made Pizza',
    price: 190,
    star: 4.8,
    arivalTime: '50-90 mins',
    id:4
},
{
    location: pizza4,
    foodName:'Home Made Pizza',
    price: 190,
    star: 4.8,
    arivalTime: '50-90 mins',
    id:5
},
{
    location: pizza5,
    foodName:'Home Made Pizza',
    price: 190,
    star: 4.8,
    arivalTime: '50-90 mins',
    id:6
},
{
    location: pizza6,
    foodName:'Home Made Pizza',
    price: 190,
    star: 4.8,
    arivalTime: '50-90 mins',
    id:7
},
{
    location: pizza7,
    foodName:'Home Made Pizza',
    price: 190,
    star: 4.8,
    arivalTime: '50-90 mins',
    id:8
},
{
    location: pizza8,
    foodName:'Home Made Pizza',
    price: 190,
    star: 4.8,
    arivalTime: '50-90 mins',
    id:9
},
{
    location: dish1,
    foodName:'Home Made Pizza',
    price: 190,
    star: 4.8,
    arivalTime: '50-90 mins',
    id:10
},
{
    location: dish2,
    foodName:'Home Made Pizza',
    price: 190,
    star: 4.8,
    arivalTime: '50-90 mins',
    id:11
},{
    location: dish2,
    foodName:'Home Made Pizza',
    price: 190,
    star: 4.8,
    arivalTime: '50-90 mins',
    id:12
}];

export const addToCartData = [];

function addMenuItems(props){
    // const [checkId,setSameId] = useState(false);
    const checkId = false;
    // Function for cart functionality
    const cartDataHandler=(addedCartData)=>{
        
        const cartData={
            location:addedCartData.location,
            foodName:addedCartData.foodName,
            price: addedCartData.price,
            quantity: addedCartData.qty,
            id : addedCartData.id
        }
        // console.log(cartData);
        for (let index=0;index<addToCartData.length;index++){
            if(addToCartData[index].id === cartData.id){
                addToCartData[index].qty = addedCartData.qty;
                // if(checkId ===false)
                //     checkId= true;
                // console.log('yay');
                // addToCartData.push(cartData);
            }
                // setSameId(true);
        }
        if(checkId===false)
            addToCartData.push(cartData);
        // addToCartData.map((oneFoodItem)=>{
        //     if(oneFoodItem.id)
        // })

        
    }
    return(<div>
         <FoodCard location={props.location} id={props.id} foodName={props.foodName} price={props.price} star={props.star} arivalTime={props.arivalTime} addCartDataHandler={cartDataHandler}/>
        </div>);
}


// function addCartItems(props){
//     console.log(props);
//     return(<div>
//          <AddedCartItem location={props.location} id={props.id} foodName={props.foodName} price={props.price} star={props.star} arivalTime={props.arivalTime}/>
                
//         </div>);
// }

// export const cartDataArray= addToCartData.map(addCartItems);
const data = imageData.map(addMenuItems);
export default data