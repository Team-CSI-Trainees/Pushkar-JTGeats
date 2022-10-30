import './inputBox.css'


function InputBox(props){
return(
<input type='text' className= {props.class} placeholder={props.text} />
);
}



export default InputBox;