import React, { useState } from "react";
import PropTypes from 'prop-types'
export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Lowercase converted to uppercase!","success");
  };
  const handleDownClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Uppercase converted to lowercase!","success");
  };
  const handleOnClear = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text has been cleared!","success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed!","success");
  };
  // const handleCopy = () => {
  //   var text = document.getElementById('myBox');
  //   text.select();
  //   navigator.clipboard.writeText(text.value);
  // };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState('');
  return (
    <>
    <div className="container"  style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          style={{color: props.mode==='dark'?'white':'black', backgroundColor: props.mode==='dark'?'rgb(4 1 56)':'white'}}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleDownClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleOnClear}>
        Clear text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
        Handle extra spaces
      </button>
      {/* <button className="btn btn-primary mx-1" onClick={handleCopy}>
        Copy text
      </button> */}
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.length>0?text.trim().split(" ").length:0} words and {text.length} characters</p>
      <p>{0.08* text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter the text above to preview it here..."}</p>
    </div>
    </>
  );
}
TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}
TextForm.defaultProps = {
    heading: "Enter Heading Here"
}
