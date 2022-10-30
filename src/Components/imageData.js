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

const imageData = [{
    location: pizza1,
    foodName:'Home Made Pizza',
    price: 190,
    star: 4.8,
    arivalTime: '50-90 mins'
},{
    location: pizza2,
    foodName:'Home Made Pizza',
    price: 190,
    star: 4.8,
    arivalTime: '50-90 mins'
},{
    location: pizza3,
    foodName:'Home Made Pizza',
    price: 190,
    star: 4.8,
    arivalTime: '50-90 mins'
},
{
    location: pizza3,
    foodName:'Home Made Pizza',
    price: 190,
    star: 4.8,
    arivalTime: '50-90 mins'
},
{
    location: pizza4,
    foodName:'Home Made Pizza',
    price: 190,
    star: 4.8,
    arivalTime: '50-90 mins'
},
{
    location: pizza5,
    foodName:'Home Made Pizza',
    price: 190,
    star: 4.8,
    arivalTime: '50-90 mins'
},
{
    location: pizza6,
    foodName:'Home Made Pizza',
    price: 190,
    star: 4.8,
    arivalTime: '50-90 mins'
},
{
    location: pizza7,
    foodName:'Home Made Pizza',
    price: 190,
    star: 4.8,
    arivalTime: '50-90 mins'
},
{
    location: pizza8,
    foodName:'Home Made Pizza',
    price: 190,
    star: 4.8,
    arivalTime: '50-90 mins'
},
{
    location: dish1,
    foodName:'Home Made Pizza',
    price: 190,
    star: 4.8,
    arivalTime: '50-90 mins'
},
{
    location: dish2,
    foodName:'Home Made Pizza',
    price: 190,
    star: 4.8,
    arivalTime: '50-90 mins'
},{
    location: dish2,
    foodName:'Home Made Pizza',
    price: 190,
    star: 4.8,
    arivalTime: '50-90 mins'
}];


function addMenuItems(props){
    return(<div>
         <FoodCard location={props.location} foodName={props.foodName} price={props.price} star={props.star} arivalTime={props.arivalTime} />
        </div>);
}


const data = imageData.map(addMenuItems);

export default data