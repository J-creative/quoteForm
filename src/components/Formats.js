import roo from '../images/deliveroo-logo.png'
import je from '../images/justeat.png'
import ue from '../images/uber-eats-logo.png'


const Formats = (props) => {
console.log(props.quote);

    return (
        <div className='formats'>
            <h2>Additional File Formats</h2>

        <div className="formatchoices">
            <div className='formatchoice roo'>
   
            <input type="checkbox"  name="deliveroo" value={props.quote.deliveroo} id='deliveroo' 
             onChange={(e)=> props.setQuote({...props.quote, deliveroo: e.target.checked} )}/>
                      <label htmlFor='deliveroo'>        <img src={roo} alt="roo image" /></label>
             </div>

             <div className='formatchoice je'>
            <input type="checkbox"  name="justeat" value={props.quote.justeat} id='justeat' 
             onChange={(e)=> props.setQuote({...props.quote, justeat: e.target.checked} )}/>
                         <label htmlFor='justeat'><img src={je} alt="just eat image" /></label>

             </div>

             <div className='formatchoice ue'>
            <input type="checkbox"  name="ubereats" value={props.quote.ubereats} id='ubereats' 
             onChange={(e)=> props.setQuote({...props.quote, ubereats: e.target.checked} )}/>
                         <label htmlFor='ubereats'><img src={ue} alt="uber image" /></label>

             </div>
        </div>
             
        </div>

        
        
    )

}

export default Formats
