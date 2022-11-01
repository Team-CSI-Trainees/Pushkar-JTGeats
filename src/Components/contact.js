import './contact.css'
// import InputBox from './inputBox'
import foodDelivery from '../images/foodDelivery.png'
import Button from './button';


function Contact(){
    // const submitForm = (e)=>{
    //     e.preventDefault();
    // }
    return(
        <div class="wrap--contact">
            <div className='contact'>
                <h2 className='contactHeading'>Do you have a question or want to become a seller?</h2>
                <h4 className='contactSubHeading'>Fill this form and our manager will contact you next 48 hours.</h4>
                <form class="wrapInput" method='post' action='https://formspree.io/f/xgeqnjzq'>
                    <input placeholder='Your Name'  class='inputBoxContact' name='name' required/>
                    <input placeholder='Your e-mail' type='email' class='inputBoxContact' name='email'/>
                    <textarea placeholder='Your message' className='contactMessage' rows={8} ></textarea>
                    <br />
                    <Button type='submit' text='Submit' class='green' />
                </form>
            </div>
            <div className='contactDeliveryGuy'><img src={foodDelivery} alt='food delivery guy'/></div>
        </div>
    );
}


export default Contact