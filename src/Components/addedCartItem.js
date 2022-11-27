import './addedCartItem.css'

const AddedCartItem=(props)=>{
    // console.log(props);
    
    return(
        <div className='wrap--cartFoodItem'>
            <span>
                <img src={props.location} alt={props.name}/>
                <p>{props.foodName}</p>
            </span>
            <p>{props.quantity}</p>
            <p>{(props.quantity)*(props.price)}</p>
        </div>
    );
}

export default AddedCartItem