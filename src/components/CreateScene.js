import React, { useState } from 'react'



const CreateScene = (props) => {

console.log(props);

    //JSX
    return (

        <div className='container'>
            <h2>How big's your menu?</h2>
            <p>How many menu items do you need photographed?</p>

            <div className="rangecontainer">
            <label htmlFor="itemno">Food</label>
            <br/>
            <input className='range' type="range" name="itemnum" value={props.quote.food} min='0' max='40' 
            onChange={(e)=> props.setQuote({...props.quote, food: e.target.value} )} />
            <p>{props.quote.food}</p>
            </div>

            <div className="rangecontainer">
            <label htmlFor="itemno">Drink</label>
            <br/>
            <input className='range' type="range" name="itemnum" value={props.quote.drink} min='0' max='40' 
            onChange={(e)=> props.setQuote({...props.quote, drink: e.target.value} )} />
            <p>{props.quote.drink}</p>
            </div>

        </div>
    )
    //end JSX


}



export default CreateScene

