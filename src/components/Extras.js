import image from '../images/PortraitC.png'


const Extras = (props) => {
    return (
        <div className='extras'>
            <h2>Staff portraits?</h2>
  
            <img src={image} alt="portrait image" />
            <br/>
            <label className='switch' htmlFor='portraits'>
            <input type="checkbox"  name="portraits" value={props.quote.portraits} id='portraits' 
             onChange={(e)=> props.setQuote({...props.quote, portraits: e.target.checked} )}/>
            <span className="slider round"></span>
              </label>
        </div>
    )
}

export default Extras
