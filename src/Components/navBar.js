import { useEffect, useState } from 'react';
import './navBar.css';
import Card from '../images/Card.png';
import search from '../images/searchIcon.png';
import logo from '../images/JTGeats.png';
import emptyCartImage from '../images/shoppingCart.png';
import NavLinks from './navLinks';
import {addToCartData} from './imageData';
import React from 'react';
import AddedCartItem from './addedCartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
// import closedMenu from '../images/menuClosed.svg'


function NavBar(){
    
    const [visibleCart,setVisibleCart] = useState(false);  
    const [itemsPresent,setItemsPresent] = useState(false);  
    const [OpenMenu,setOpenMenu]=useState(false);
    const openCart=()=>{
        setVisibleCart(true);
        // console.log(addToCartData);
    }
    const returnToMenu=()=>{
        setVisibleCart(false);
    }

    // Cart
    const addCartItem = (props)=>{
        return(
            <AddedCartItem foodName={props.foodName} quantity={props.quantity} price={props.price} location={props.location}/>
        );
    }
    const cartItems = addToCartData.map(addCartItem);

    
    
    const checkEmpty=()=>{
        if(addToCartData.length>0)  
            setItemsPresent(true);
        else
            setItemsPresent(false);
    }
    useEffect(checkEmpty,[addToCartData.length]);


    
    return(
        <div className='navBar'>
            <div className="wrapLogo" ><img src={logo} alt='Logo' /></div>
            {/* <div className= {OpenMenu ?"" :'requestInvisible'}><NavLinks class='navLinks list'/></div> */}
            <NavLinks class='footer--navLinks'/>
            
            <div className='list'>
          {/* <FontAwesomeIcon  icon={faBars} className={OpenMenu ?"requestInvisible" :'menu marginRight'} onClick={() => setOpenMenu(true)}/>
          <FontAwesomeIcon  icon={faXmark}  className={OpenMenu ?"menu marginRight" :"requestInvisible"} onClick={() => setOpenMenu(false)}/> */}
            <a href="https://www.google.com"><span> <img src={search} alt='search' className='iconHeader searchIcon'></img></span></a>
            <button onClick={openCart} className='green cartOpenBtn'><img src={Card} alt='shop' className='iconHeader shopIcon noRightMargin'></img></button>
            </div>
            
            
            <div className={visibleCart?'blurBackground':'requestInvisible'}>
                <section className={visibleCart?'wrap--cart':'requestInvisible wrap--cart'}>
                    <div className={itemsPresent?'wrapCartBoxFull':"wrapCartBoxEmpty"}>


                        <div className={itemsPresent?'requestInvisible':"wrap--emptyCart"}>
                            <img src={emptyCartImage} alt='cart empty' className='emptyCartImage' />
                            <h3>Cart is Empty</h3>
                            <p>Add some items to the cart to checkout</p>
                            <button className='green' onClick={returnToMenu}>Back to Menu</button>
                        </div>


                        {/* Cart Data */}
                        
                        <div className={itemsPresent?'':'requestInvisible'}>
                            <button className='green' onClick={returnToMenu}>Back to Menu</button>
                                <div className='cart--heading'>
                                    <p>Dish Image</p>
                                    <p>Dish Name</p>
                                    <p>Quantity</p>
                                    <p>Price</p>
                                </div>
                            <div className='wrap--cartItems'>
                                {cartItems}
                            </div>
                        </div>
                        
                    </div>

                    
                </section>
            </div>
        </div>
    );
}



export default NavBar;