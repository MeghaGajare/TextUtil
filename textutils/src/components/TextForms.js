import {PropTypes} from 'prop-types';
import React,{useState} from 'react';

function TextForms(props) {

    
    const handleOnClickToLower = () =>{
        console.log("Lower Case was clicked." + text);
        let newText = text.toLowerCase();
        setText(newText);
       
    }
    const handleOnClickToUpper = () =>{
        console.log("Upper Case was clicked." + text);
        let newText = text.toUpperCase();
        setText(newText);
       
    }
    const handleOnClickToClear = () =>{
        console.log("clear button was clicked." );
        let newText = "";
        setText(newText);
       
    }
    const [text,setText] = useState("Write some text here....");

    const handleOnChange = (event) =>{
        console.log("You have clicked.");
        setText(event.target.value);
    }
    
    return (
        <>
        <div className="container my-5">
            <h2>{props.heading}</h2>
            
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">TextArea</label>
                <textarea className= "form-control" onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3" value={text}></textarea>
                <br></br>
                <div className='m-3'>
                <label className="btn btn-outline-primary mx-2" onClick = {handleOnClickToUpper} htmlFor="btn-check-outlined">Convert to UpperCase</label>
                <label className="btn btn-outline-primary mx-2" onClick = {handleOnClickToLower} htmlFor="btn-check-outlined">Convert to LowerCase</label>
                <label className="btn btn-outline-primary mx-2" onClick = {handleOnClickToClear} htmlFor="btn-check-outlined">Clear Text</label><br></br>

                </div>
            </div>
        </div>
        <div className="container my-5 card" >
        <h4>Your Text Summary</h4>
            <p>{text.length} characters and {text.split(" ").filter((element)=>{return element.length!==0}).length} words</p>
            <h4>Preview</h4>
            <p>{text}</p>
        </div>
        </>
    )
}


TextForms.propTypes = {
    heading : PropTypes.string
}


export default TextForms;
