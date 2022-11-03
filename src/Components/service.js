import './service.css'
import { useRef, useState } from 'react';
import foodVideo from '../images/foodVideo.mp4'
import playpauseBtn from '../images/playpause.png'
// import { getByDisplayValue } from '@testing-library/react';
// import { useState } from 'react';

function Service(){
    const videoref = useRef();
    
    const [visiblePlayerBtn,setVisiblePlayerBtn] = useState(true);
    const playPause=()=>{
            videoref.current.play();
           
            setVisiblePlayerBtn(false);
            
        }
        const displayPlayerBtn=()=>{
                videoref.current.pause();
            
            setVisiblePlayerBtn(true);
    }
return(
    <section className='wrap--service'> 
        <div className='serviceText'>
            <h2 className='serviceHeading'>We are providing best <br/>
            home cooked food delivery service.</h2>
            <p className='serviceContent'>Away from home and craving the tasty homemade recipes? 
            Choose from a selection of our delicious home cooked dishes </p>
        </div>
             <div class="wrap--videoPlayBtn"><button className={visiblePlayerBtn?'green serviceBtn':'invisiblePlayerBtn'} onClick={playPause}><img src={playpauseBtn} alt='Play button'/></button></div>
        <div class="wrap--video">
            <video ref={videoref} src={foodVideo} onClick={displayPlayerBtn} className='video'/>
            
        </div>
    </section>
);
}

export default Service