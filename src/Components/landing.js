import './landing.css'
import hero from '../images/cuate.png'
import Button from './button'
import NavBar from './navBar'
import InputBox from './inputBox'

function Landing(){
    return(
        <div className='wrapLanding'>
            <NavBar />
            <div className='landing'>
                <div className='heroContent'>
                    <h1 className='headingContent'>Authentic Home food in India</h1>
                    <p className='content'>JTGeats is a courier service in which authentic home cook food is delivered to a customer.</p>
                    <InputBox text='Search food you love' class='inputBoxLanding'/>
                    <Button text='Search' class='accent'/>
                </div>
                <div className='heroImage'><img src={hero} alt='hero' /></div>
            </div>
        </div>
    );
}

export default Landing;