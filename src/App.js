import React from 'react';
import Form from './Form';
import SimpleForm from './SimpleForm';
import "./splash.css"
import roo from './images/deliveroo-logo.png'
import logos from './images/logos.png'
import pizza from './images/pizza.gif'
import salad from './images/SaladReplace.png'
import portrait from './images/staff Portrait.png'
import shake from './images/Milkshake aspect ratio.jpg'


function App() {
    return (
        <div className='app'>
            {/* <Form /> */}
            <header>
                <nav>
                    <h1>Manchester Menu</h1>
                </nav>
            </header>
            <section className="front s1" id="frontid">
            <div className="wide d1">
            <div>
                    <h2>simple. <br /> clean. <br />tasty.</h2>
                    <button>Get a Quote</button>
                </div>
                <div><img className='salad' src={salad} alt="Salad" srcset="" /></div>
            </div>

            </section>
            <section className="s2">
            <div className="wide d2">
                <h3>Lets make great images together</h3>
            </div>

            </section>
            <section className="s3">
            <div className="wide d3">
            <div>
                <h3>We've made food photography easy</h3>
                <h4>We bring the camera, lighting and backdrops. All you need to do is make the food.</h4>
            </div>
            <div>
                <img src={pizza} className='pizza' alt="pizza" srcset="" />
                <h5>Choose from a selection of backgrounds</h5>
            </div>
            </div>
       
            </section>
            <section className="s4">
            <div className="wide d4">
            <div className="neffort">
                    <h3>No Effort Quote</h3>
                    <h4>Simply give us a link to your menu and we’ll send you an itemized quote or you can use our calculator to plan the shoot yourself.</h4>
                </div>
                <div className="formContainer blueBox">
                     <SimpleForm/>
                </div>
            </div>

            </section>
            <section className="s5">
            <div className="wide d5">
            <h3>Quote Calculator</h3>
                <div id="boxes">
                    <div className="bluebox">
                        <h3>Group your menu into similar items</h3>
                        <p>We'll shoot the menu in a number of 'scenes'. The lighting, camera angle and background will stay the same and we simply swap out the food as you make it. </p>
                    </div>
                    <div className="bluebox">
                        <h3>Decide on a backdrop</h3>
                        <p>You can either choose from our range of textured and solid colour backdrops or use a nice surface already in your restaurant.</p>
                    </div>
                    <div className="bluebox">
                        <h3>Add Extras​</h3>
                        <p>We can take an overview or 'hero shot' of a number of items together. We also offer staff portraits, restaurant photos and can resize your images to the delivery website's exact specifications.</p>
                    </div>
                </div>
                <button>Go To Calculator</button>
            </div>
        
            </section>
            <section className="s6">
            <div className="wide d6">
            <div>
                 <h3>Ready to upload files</h3>
                 <h4>We’ll resize and crop your images to each app’s specifications.</h4>
                 <div className="foodIcons">
                     <img src={logos} alt="foodlogos" srcset="" />

                 </div>
                </div>
                <div className="milkshake">
                    <img src={shake} alt="" srcset="" />
                </div>
            </div>
       
            </section>
            <section className="s7">
            <div className="wide d7">
            <div>
                <h3>Extras</h3>
                <h4>While we’re with you why not use the opportunity to get some portraits of staff or some inviting interior shots to make your restaurant the place to be when things reopen?</h4>
            </div>
            <div className='portrait'>
                <img src={portrait} alt="" srcset="" />
            </div>
            </div>
    
            </section>
            <section className="s8">
            <div className="wide d8">   
            <h3>FAQ</h3>   
            <div className="columns">
                 <div>                
                <p className="bold">Explain what a no commitment shoot means.</p>
                <p>We’ll take the pictures for you and you only pay if you choose to use them.</p>
                <p className="bold">How long will it take?</p>
                <p>hat depends on the number of items on the menu, how many scenes there are and how long they take to prepare. For example photographing 10 milkshakes might take 15 minutes to setup then 3 minutes for each shake so be done in under an hour. Whereas 10 Main courses  could take 30 minutes to setup and then 10 minutes per shot and take over two hours. An entire menu will usually take a day.</p>
                <p className="bold">Where can I use the images?</p>
               <p>Anywhere and everywhere. Deliveroo, ubereats, instagram. A better question is where shouldn’t you use them?</p>
               </div>

            <div>
                <p className="bold">Can I use my own restaurant as a background?</p>
                    <p>Yes absolutely. If you have a nice wood or marble surface it will look great from top down and a nicely lit bar always looks good behind a burger.</p>
                    <p className="bold">I have a takeaway/dark kitchen with very little space.</p>
                    <p>We’re perfect for you. Because we bring our own backdrops we can work in very small spaces and still achieve excellent results.</p>
                    <p className="bold">How long until I get my images?</p>
                    <p>It usually takes 2-3 days for all the images to be edited and delivered, but you have to book first so...</p>
            </div>
            </div> 
            <button>Get a Quote</button>
        </div>
            </section>
            <section className="s9">
            <div className="wide d9">
            <footer>
                    <span>Copyright 2021 | </span><span className="bold">Manchester Menu</span>
                </footer>
            </div>
            </section>
        </div>
    )
}

export default App
