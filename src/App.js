
import './App.css';
import './css/switch.css';
import './css/table.css';
import './css/extras.css';
import './css/formats.css';
import React, { useState } from 'react'
import Intro from './components/Intro';
import HeroShot from './components/HeroShot';
import CreateScene from './components/CreateScene';
import Extras from './components/Extras';
import Pricecalc from './components/Pricecalc';
import Formats from './components/Formats';
import Total from './components/Total';
import Submitted from './components/Submitted';
import Icon from '@material-ui/core/Icon';



const PRICES = {
HEROPRICE : 20,
PORTRAITSPRICE : 20,
 FORMATSPRICE : 5,
 BASEPRICE : 30,
PRICEPERFOOD : 5,
PRICEPERDRINK : 5,
}

function App() {
  const[formpage, setFormpage] = useState(100)
  const[liveprice, setLiveprice] = useState(0)
  const[quote,setQuote] = useState({
    food:0,
    drink:0,
    hero: false,
    portraits: false,
    deliveroo:false,
    justeat:false,
    ubereats:false,
  })

  


  return (
    <div className='app'>
      {formpage === 100 && <Intro />}
      {formpage === 200 && <HeroShot      quote={quote}  setQuote={setQuote}    />}
      {formpage === 300 && <CreateScene   quote={quote}  setQuote={setQuote}   />}
      {formpage === 400 && <Extras   quote={quote}  setQuote={setQuote}  />}
      {formpage === 500 && <Formats   quote={quote}  setQuote={setQuote}  />}
      {formpage === 600 && <Total   quote={quote}  setQuote={setQuote}  PRICES= {PRICES} setFormpage={setFormpage}/>}
      {formpage === 700 && <Submitted />}

      {formpage<600 && <button className='forward' onClick={forwardpressed}>Next step</button>}
      {formpage > 100 && formpage<600 && <Pricecalc  quote={quote} PRICES= {PRICES}/>}
      {formpage>100 && formpage<700 &&  <button className='back' onClick={backpressed}>go back</button>}

    </div>
  );



function forwardpressed(){
  setFormpage(formpage+100)
}

function backpressed(){
  setFormpage(formpage-100)
}

} //app function







export default App;
