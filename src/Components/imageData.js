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
    // Function for add to cart functionality
    let checkId = false;
    const cartDataHandler=(addedCartData)=>{
        
        const cartData={
            location:addedCartData.location,
            foodName:addedCartData.foodName,
            price: addedCartData.price,
            quantity: addedCartData.qty,
            id : addedCartData.id
        };
        // console.log('in function cartDataHandler',cartData);
        if(addToCartData.length!==0){
            // console.log('checking if');
            checkId= false;
            for (let index=0;index<addToCartData.length;index++){
                // console.log('checking if for',cartData);
                if(cartData.id === addToCartData[index].id){
                    // console.log('checking if for if');
                    addToCartData.splice(index,1);
                    addToCartData.push(cartData);
                    console.log('added');
                    checkId = true;
                    break;
                }

                // setSameId(true);
            }
            if(checkId===false)
            {
                addToCartData.push(cartData);
                console.log('else 1st wala');
                // break;
            }
        }
        else
            addToCartData.push(cartData);
    }

    // Removing cart data
    const removeCartData = (removedCartData)=>{
        const removeCartDataObj={
            location:removedCartData.location,
            foodName:removedCartData.foodName,
            price: removedCartData.price,
            quantity: (removedCartData.qty - 2),
            id : removedCartData.id
        };
        
        for (let index=0;index<addToCartData.length;index++){
            if(removeCartDataObj.id===addToCartData[index].id){
                console.log('found it',removeCartDataObj.quantity);

                if(removeCartDataObj.quantity>0){
                    addToCartData.splice(index,1);
                    addToCartData.push(removeCartDataObj);
                    break;
                }
                else
                    addToCartData.splice(index,1);              
            }
        }
    }
        // if(removeCartDataObj.quantity===1){
        // else{
        //     for (let index=0;index<addToCartData.length;index++){
        //         if(removeCartDataObj.id===addToCartData[index].id){
        //             addToCartData.splice(index,1);
        //             break;
        //         }
        //     }

        // }

    

    return(<div>
         <FoodCard location={props.location} id={props.id} foodName={props.foodName} price={props.price} star={props.star} arivalTime={props.arivalTime} addCartDataHandler={cartDataHandler} removeCartDataHandler={removeCartData}/>
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