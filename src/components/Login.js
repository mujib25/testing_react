import React from 'react'
import mainImage from '../images/1.jpeg';

export default function Login(props) {
  return (
    <div>
      <h1 className='text-center my-4' style={{
            color: props.mode === "light" ? "black" : "white",
            color: props.mode === "dark" ? "white" : "black"
           
          }}>Hello, Nice to meet u</h1>
          <div className="container">
          <img src={mainImage} className="img-fluid rounded-3 img-thumbnail shadow"/>
          </div>
    </div>
  )
}
