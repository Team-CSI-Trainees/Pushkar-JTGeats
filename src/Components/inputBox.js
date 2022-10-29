import './inputBox.css'


function InputBox(props){

return(
<input type='text' className='inputBox' placeholder={props.text} />
);
}



export default InputBox;