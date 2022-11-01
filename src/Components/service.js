import './service.css'

function Service(){
return(
    <section className='wrap--service'> 
        <div>
            <h2 className='serviceHeading'>We are providing best <br/>
            home cooked food delivery service.</h2>
            <p className='serviceContent'>Away from home and craving the tasty homemade recipes? 
            Choose from a selection of our delicious home cooked dishes </p>
        </div>
        <div class="wrap--video">
            <video src='https://pixabay.com/videos/id-8466/' controls/>
        </div>
    </section>
);
}

export default Service