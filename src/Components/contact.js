import './contact.css'
import InputBox from './inputBox'
import foodDelivery from '../images/foodDelivery.png'
import Button from './button';


function Contact(){
    return(
        <div class="wrap--contact">
            <div className='contact'>
                <h2 className='contactHeading'>Do you have a question or want to become a seller?</h2>
                <h4 className='contactSubHeading'>Fill this form and our manager will contact you next 48 hours.</h4>
                <div class="wrapInput">
                    <InputBox text='Your Name'  class='inputBoxContact'/>
                    <InputBox text='Your e-mail' class='inputBoxContact'/>
                    <textarea placeholder='Your message' className='contactMessage' rows={8} ></textarea>
                    <br />
                    <Button text='Submit' class='green' />
                </div>
            </div>
            <div className='contactDeliveryGuy'><img src={foodDelivery} alt='food delivery guy'/></div>
        </div>
    );
}


export default Contact