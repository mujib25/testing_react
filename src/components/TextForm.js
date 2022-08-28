import React, {useState} from 'react';




export default function TextForm(props) {

   
    
    const [text, setText] = useState("Your Old Text are here");
    const [oldTitle, setTitle] = useState("Enter The Text Here Below !!!");
    const [btnText, setbtnText] = useState("Covert To UpperCase");
    const [btnLoText, setbtnLoText] = useState("Convert To LowerCase");
  
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        setTitle("Upper Case");
       
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        setTitle("Lower Case");
       setbtnText("Text Case Changed");
    }
    
    const handleOnChange = (event)=>{
         setText(event.target.value)
    }
        return (
            <>
            <div className="container">
                <div className="mb-3">
                <h1>{oldTitle}</h1>
                <textarea onChange={handleOnChange}  className="form-control"  value={text}  id="myBox" rows="8"></textarea>
                </div>
                <button onClick={handleUpClick}  className="btn btn-dark w-100" > {btnText} </button>
                <button onClick={handleLoClick}  className="btn btn-dark w-100 mt-2" > {btnLoText} </button>
            </div> 

            <div className="container my-5">
                <h1>{props.summaryTitle}</h1>
                <p>{text.split(' ').length} words, and {text.length} chracters</p>
                <p>{0.008 * text.split(' ').length} Minutes Read</p>
                <h5>Text Priveiw</h5>
                <p>
                    {text}
                </p>
            </div>
            </>
            )
        }


TextForm.defaultProps = {
    summaryTitle: "Your Text Summary"
}
 