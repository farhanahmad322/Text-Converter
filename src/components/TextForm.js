import React, { useState } from "react";

export default function TextForm(props) {
  const handeleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("convert to uppercase!", "success");
  };

  const handeleLowclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("convert to Lowercase!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handeleCopy = () => {
    var text = document.getElementById("myBox");
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Text coyed!", "success");
  };

  const ExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove extra space!", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="mb-4">{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handeleUpclick}>
          {" "}
          Convert to UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handeleLowclick}>
          {" "}
          Convert to lowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handeleCopy}>
          {" "}
          Copy text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={ExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          number of words and {text.length} charecter
        </p>
        <p>{0.008 * text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length} minute to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to Preview"}
        </p>
      </div>
    </>
  );
}
