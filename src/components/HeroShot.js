const HeroShot = (props) => {
    return (
        <div>
            <h2>Hero Shot</h2>
            <p>A hero image is the one customers see when browsing the restaurants on their delivery app.</p>
            <p> It's usually a group shot of 5 of more items. It's the image that sells your restaurant. </p>
            <label className='switch' htmlFor='hero'>
            <input type="checkbox"  name="hero" value={props.quote.hero} id='hero' 
             onChange={(e)=> props.setQuote({...props.quote, hero: e.target.checked} )}/>
            <span className="slider round"></span>
              </label>
        </div>
    )
}

export default HeroShot

