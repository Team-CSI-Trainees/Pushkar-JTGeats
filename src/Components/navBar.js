import { useState } from 'react';
import './navBar.css';
import Card from '../images/Card.png';
import search from '../images/searchIcon.png';
import logo from '../images/JTGeats.png';
import emptyCartImage from '../images/shoppingCart.png';
import NavLinks from './navLinks';

import React from 'react';
// import Button from './button';

function NavBar(){
    const [visibleCart,setVisibleCart] = useState(false);  
    const openCart=()=>{
        setVisibleCart(true);
    }
    const returnToMenu=()=>{
        setVisibleCart(false);
    }

    return(
        <div className='navBar'>
            <div className="wrapLogo"><img src={logo} alt='Logo' /></div>
            <NavLinks/>
            
            <div className='list'>
            <a href="https://www.google.com"><span> <img src={search} alt='search' className='iconHeader searchIcon'></img></span></a>
            <button onClick={openCart} className='green cartOpenBtn'><img src={Card} alt='shop' className='iconHeader shopIcon noRightMargin'></img></button>
            </div>
            
            
            <div className={visibleCart?'blurBackground':'requestInvisible'}>
                <section className={visibleCart?'wrap--cart':'requestInvisible wrap--cart'}>
                    <div className="wrapCartBox">
                        <div className="wrap--emptyCart">
                            <img src={emptyCartImage} alt='cart empty' className='emptyCartImage' />
                            <h3>Cart is Empty</h3>
                            <p>Add some items to the cart to checkout</p>
                            <button className='green' onClick={returnToMenu}>Back to Menu</button>
                        </div>


                        {/* Cart Data */}
                        {/* <div>
                            
                        </div> */}
                        
                    </div>

                    
                </section>
            </div>
        </div>
    );
}



export default NavBar;