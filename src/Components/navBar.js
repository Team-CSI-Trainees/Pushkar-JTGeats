import './navBar.css';
import Card from '../images/Card.png'
import search from '../images/searchIcon.png'
import logo from '../images/JTGeats.png'

function NavBar(){
    return(
        <div className='navBar'>
            <div className="wrapLogo"><img src={logo} alt='Logo' /></div>
            <div className='list'>
                <a href="#home"><span className='leftMargin'>Home</span></a>
                <a href="#about"><span>About</span></a>
                <a href="#menu"><span>Menu</span></a>
                <a href="#blog"><span>Blog</span></a>
                <a href="#contact"><span className='noRightMargin'>Contact</span></a>
            </div>
            <div className='list'>
                <span> <img src={search} alt='search' className='searchIcon'></img></span>
                <span><img src={Card} alt='shop' className='shopIcon noRightMargin'></img></span>
            </div>
        </div>
    );
}



export default NavBar;