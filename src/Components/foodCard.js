import './foodCard.css'


function FoodCard(props){
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
                    <p className='foodAdd'>➕</p>
                    
                </div>

            </div>
        </div>
    );
}


export default FoodCard