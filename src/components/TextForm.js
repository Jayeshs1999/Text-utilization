import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("uppercase was click"+text.toUpperCase());
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", 'success');
    }
    const handleOnChange = (event) => {
        console.log("on change click")
        setText(event.target.value)
    }
    const handleLcClick = ()=>{
        const newLowerText = text.toLowerCase();
        setText(newLowerText);
        props.showAlert("Converted to lowercase", 'success');
    }
    const clearText = () => {
        setText('');
        props.showAlert("Clear text", 'success');
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space removed", 'success');
    }
    const [text, setText] =  useState("");
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" placeholder='Enter your address' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'? 'grey' : 'white',
            color: props.mode === 'dark'? 'white' : 'black'
        }} id="myBox" rows="8"></textarea>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLcClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        </div>
    </div>
    <div className="container" style={{color: props.mode === 'dark'? 'white' : 'black'}} >
        <h1>Your text summary</h1>
        <p><strong>{text.split(" ").filter((element => {return element.length !==0})).length}</strong> word and  <strong>{text.length}</strong> characters</p>
        <p><strong>{0.008 * text.split(" ").filter((element => {return element.length !==0})).length}</strong> Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text: "Enter somthing in the above textbox to preview it"}</p>
    </div>

    </>
  )
}
