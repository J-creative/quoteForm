
const Pricecalc = ({quote:{
    
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
}
}) => {

const hero1 = hero ? 1 : 0;
const portraits1 = portraits ? 1 : 0;
const deliveroo1 = deliveroo ? 1 : 0;
const ubereats1 = ubereats ? 1 : 0;
const justeat1 = justeat ? 1 : 0;



let total= BASEPRICE +

 food*PRICEPERFOOD +
  drink*PRICEPERDRINK +

portraits1*PORTRAITSPRICE+
hero1*HEROPRICE+


  justeat1*FORMATSPRICE +
  deliveroo1*FORMATSPRICE +
  ubereats1*FORMATSPRICE;




    return (
        <div>
            <p className="price">£{total}</p>
        </div>
    )
}

export default Pricecalc
