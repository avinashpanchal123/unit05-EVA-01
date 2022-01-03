import React, { useState } from "react";

import "./ReceipeForm.css"

import ReceipeBoard from "./ReceipeBoard"


function ReceipiForm() {
    const [ name, setName] = useState("")
    const [ ingredients, setIngredients] = useState("")
    const [ time, setTime] = useState("")

    const receipeName = (event)=>{
       
        setName( event.target.value);
    }
    const ingredient = (event)=>{
      
        setIngredients( event.target.value);
    }
    const timeUpdate = (event)=>{
      
        setTime( event.target.value);
    }
    const receipeData = (e)=>{
        e.preventDefault()
       const data = {
       
        receipeName: name,
        ingredients: ingredients,
        time: time
      
       }
       console.log(data);
     
    }
    return (
     
    //   <h1>Avinash</h1>
    <div  className="formDiv">
        <form onSubmit={receipeData}>
            <div>
                <label>Receipe Name</label>
                <br></br>
                <input type="text" value={name} onChange={receipeName}></input>
            </div>
            <div>
                <label>ingredients</label>
                <br></br>
                <input type="text" value={ingredients} onChange={ingredient}></input>
            </div>
            <div>
                <label>time to cook</label>
                <br></br>
                <input type="text" value={time} onChange={timeUpdate}></input>
            </div>
            {/* <div>
                <label>time to cook</label>
                <br></br>
                <input type="text"></input>
            </div> */}
            <button type="submit" >Create Receipe</button>
            <ReceipeBoard  />
        </form>
    </div>
    )
  }
  
  export default ReceipiForm;
  