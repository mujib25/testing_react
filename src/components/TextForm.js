import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [oldTitle, setTitle] = useState("Enter The Text Below !!!");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    setTitle("Upper Case");
    props.showAlert("Converted To UpperCase","success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    setTitle("Lower Case");
    props.showAlert("Converted To LowerCase","success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    setTitle("Enter The Text Here Below !!!");
    props.showAlert("Text Area is Cleaned","danger");
  };

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container p-3 rounded-1"
        style={{ backgroundColor: props.mode === "dark" ? "#042743" : "white" }}
      >
        <div
          className="mb-3"
          style={{
            backgroundColor: props.mode === "dark" ? "#042743" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h1>{oldTitle}</h1>
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnChange}
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <div
          className="btns w-100 d-flex justify-content-between"
          style={{
            backgroundColor: props.mode === "dark" ? "#042743" : "white",
          }}
        >
          <button onClick={handleUpClick} className="btn btn-primary">
            {props.uppercase_btn}
          </button>
          <button onClick={handleLoClick} className="btn btn-primary">
            {props.lowercase_btn}
          </button>
          <button onClick={handleClearClick} className="btn btn-primary">
            {props.btn_Clear}
          </button>
          <button onClick={removeExtraSpaces} className="btn btn-primary">
            Remove Extra Spaces
          </button>
        </div>
      </div>

      <div
        className="container my-5 p-3 rounded-1"
        style={{
          backgroundColor: props.mode === "dark" ? "#042743" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h5>
          <u>{props.summaryTitle}</u>
        </h5>
        <p>
          {text.split("").length} words, and {text.length} chracters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h5>Text Priveiw</h5>
        <p>
          {text.length > 0
            ? text
            : "Enter Something above in the textarea to view the summary"}
        </p>
      </div>
    </>
  );
}

TextForm.defaultProps = {
  summaryTitle: "Your Text Summary",
  btn_Clear: "Clear Text Area",
  uppercase_btn: "Convert To UpperCase",
  lowercase_btn: "Convert To lowerCase",
};
