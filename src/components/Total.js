import firebase from "../firebase";
import  { useRef } from "react";
import emailjs from 'emailjs-com';


const Total = ({quote:{

    food,
    drink,
    hero,
    portraits,
    deliveroo,
    justeat,
    ubereats,

},
PRICES:{
  HEROPRICE ,
  PORTRAITSPRICE ,
  PRICEPERDRINK,
   FORMATSPRICE,
   BASEPRICE ,
  PRICEPERFOOD,
}, setFormpage, setQuote




}) => {
    const mail = useRef(null);
    const resturant = useRef(null);
    const phone = useRef(null);
    const message = useRef(null);

    const hero1 = hero ? 1 : 0;
    const portraits1 = portraits ? 1 : 0;
    const deliveroo1 = deliveroo ? 1 : 0;
    const ubereats1 = ubereats ? 1 : 0;
    const justeat1 = justeat ? 1 : 0;
    let finaltotal= BASEPRICE +

    food*PRICEPERFOOD +
     drink*PRICEPERDRINK +
   
   portraits1*PORTRAITSPRICE+
   hero1*HEROPRICE+
   
   
     justeat1*FORMATSPRICE +
     deliveroo1*FORMATSPRICE +
     ubereats1*FORMATSPRICE;
   
   
   


    let herorow=null;
    let portraitrow=null;
    let deliveroorow=null;
    let ubereatsrow=null;
    let justeatrow=null;
    let aff=null;

    if(hero){
         herorow =     <tr>
         <td>Hero shot</td>
         <td><br/></td>
         <td><p>{HEROPRICE}<br/></p>
         </td>
         </tr>;
    }
    if(portraits){
        portraitrow =      <tr>
        <td>Staff portraits</td>
        <td><br/></td>
        <td><p>{PORTRAITSPRICE}<br/></p>
        </td>
        </tr>
   }
   if(deliveroo){
deliveroorow= <tr className='appoption'>
<td>Deliveroo</td>
<td></td>
<td>{FORMATSPRICE}
        </td>
        </tr>
   }
   if(ubereats){
    ubereatsrow= <tr className='appoption'>
    <td>Uber Eats</td>
    <td></td>
    <td>{FORMATSPRICE}<br/>
            </td>
            </tr>
       }
       if(justeat){
        justeatrow= <tr className='appoption'>
        <td>Just eat</td>
        <td></td>
        <td>{FORMATSPRICE}<br/>
                </td>
                </tr>
           }
           if(deliveroo || ubereats || justeat){
            aff=    <tr className='subhead'>
            <td>Additional file formats</td>
            <td><br/></td>
            <td><br/></td>
            </tr>
               }

    return (
        <div className='total'>
     <div className='formcontain'>
        <h3>Your Quote</h3>
        <p>Great now just fill in your details and we're a step closer to getting amazing pictures of your food</p>
      
<form id='contactform' action="" onSubmit={submitpressed} className='endform'>
 <label>  Restaurant name
               <br/> <input 
               required
                type='text'
                 name="resturant name" 
                 id="resturantname"
                 ref={resturant}

                 />
             </label>
    <label> Email address
               <br/> <input 
               required
                type='email'
                 name="email" 
                 id="customeremail"
                 ref={mail}
                 />
             </label>

             <label> Phone 
               <br/> <input 
                type='tel'
                 name="phonenumber" 
                 id="customerphone"
                 ref={phone}
                 />
             </label>
             <label> Message (optional)
               <br/> <textarea
                 name="message" 
                 id="message"
                 ref={message}
                 ></textarea>
             </label>
    <button type='submit'className='submit'>Submit</button>
</form>
  </div>
            
        <div className="tablecontainer">
            <table className="end-table">
    <tbody>
    <tr className="scn">
    <td>Summary</td>
    <td>Quantity</td>
    <td>Price</td>
    </tr>
    <tr>
    <td>Food</td>
    <td><p>{food}<br/></p>
    </td>
    <td>{food*PRICEPERFOOD} <br/></td>
    </tr>
    <tr>
    <td>Drinks</td>
    <td><p> {drink} <br/></p>
    </td>
    <td> {drink*PRICEPERDRINK} <br/></td>
    </tr>
    


    {herorow}
     {portraitrow}
    {aff}
    {deliveroorow}
    {ubereatsrow}
    {justeatrow}
    
    <tr className=' ttl scn'>
    <td>Total</td>
    <td><br/></td>
    <td><p>£{finaltotal}<br/></p>
    </td>
    </tr>
    </tbody>
    </table>
    </div>
 
        </div>
    )//end jsx


function submitpressed(e){
    e.preventDefault();
    const table = document.querySelector('.tablecontainer').innerHTML;
    console.log(table);
    const deets = {
        resturant: resturant.current.value,
        email: mail.current.value,
        phone: phone.current.value,
        message: message.current.value,
        food: food,
        drink: drink,
        hero: hero,
        portraits: portraits,
        fileformats:{deliveroo: deliveroo,
                  justeat: justeat,
                 ubereats: ubereats},
        Quote:finaltotal,
        table:`${table}`

      };
    firebase.firestore().collection('customers').add(deets).catch(function(error) {
        console.error('Error writing new message to database', error);
      });


      emailjs.init('user_hBnmQvMkXdSgpNuVUqZof');
      emailjs.send('service_ltxg8ce', 'template_49facn3', deets, 'user_hBnmQvMkXdSgpNuVUqZof')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        setFormpage(700);
        setQuote({});
     }, function(error) {
        console.log('FAILED...', error);
     });;






      console.log('form submitted');


}

}

export default Total
