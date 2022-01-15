import React from "react";

export default function About(props) {

// const [myStyle,setMyStyle]= useState({
// color:'white',
// backgroundColor:'black',
// })

let myStyle={
  color:props.mode==='dark'?'white':'#042743',
  backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
}



return (
<div className="container">
<h1 className="my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>About us</h1>
  <div className="accordion" id="accordionExample "style={myStyle}>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button" style={myStyle}
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
         <strong>Analyz Your Text</strong> 
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body" style={myStyle}>
            
          shown by default, until the collapse plugin adds the appropriate
          classes that we use to style each element. These classes control
          the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or
          overriding our default variables. 
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed" style={myStyle}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          <strong>Free to use</strong> 
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse" style={myStyle}
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body" style={myStyle}>
          This is the second item's accordion body. It is
          hidden by default, until the collapse plugin adds the appropriate
          classes that we use to style each element. 
          
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"style={myStyle}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
         <strong>Browser Compatible</strong> 
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse" style={myStyle}
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body" style={myStyle}>
            It ishidden by default, until the collapse plugin adds the appropriate
          classes that we use to style each element. These classes control
          the overall appearance, as well as the showing and hiding via CSS
          transitions. 
        </div>
      </div>
    </div>
  </div>
</div>
)
}
