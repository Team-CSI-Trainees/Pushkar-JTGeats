import image from '../images/pizzaPic.png';


const imageData = [{
    location: image,
    foodName:'Home Made Pizza',
    price: 190,
    star: 4.8,
    arivalTime: '50-90 mins'
},{},{}];


const menuItems = (props)=>{
    return(<div>
        imageData.map({ <FoodCard loc={imageData.location} foodName={imageData.name} price={imageData.price} star={imageData.star} arivalTime={imageData.arivalTime} />})
        </div>);}


