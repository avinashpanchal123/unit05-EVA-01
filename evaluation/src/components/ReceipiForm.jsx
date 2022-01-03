import React from "react";

import "./ReceipeForm.css"


function ReceipiForm() {
    return (
     
    //   <h1>Avinash</h1>
    <div  className="formDiv">
        <form>
            <div>
                <label>Receipe Name</label>
                <br></br>
                <input type="text"></input>
            </div>
            <div>
                <label>ingredients</label>
                <br></br>
                <input type="text"></input>
            </div>
            <div>
                <label>time to cook</label>
                <br></br>
                <input type="text"></input>
            </div>
            <div>
                <label>time to cook</label>
                <br></br>
                <input type="text"></input>
            </div>
            <button>Create Receipe</button>
        </form>
    </div>
    )
  }
  
  export default ReceipiForm;
  