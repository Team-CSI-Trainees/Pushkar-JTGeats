import './button.css'


function Button(props){
    const value = props.text;
    return(
        <button className='accent'>{value}</button>
    );
}


export default Button;