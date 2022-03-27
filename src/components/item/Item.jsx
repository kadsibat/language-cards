import React from 'react';
import {useState} from "react"
import "./Item.css";

const Item = ({card}) => {
     const [showLogo, setShowLogo] = useState(true)

     const handleStyle = () => {
        setTimeout(() => {
          setShowLogo(showLogo)
        }, 3000);
        setShowLogo(!showLogo)
      }
    
  return (
   <div className="card" onClick={handleStyle}>
       {showLogo ?  (<div>
      <img className="card-logo" src={card.img} alt=""/>
      <h3 className="card-title">{card.name}</h3>
     {/* { console.log(card)} */}
     </div>
   ):(
     <ul className="list">
         {
             card.options.map((element,index)=>{
                 return <li key={index}>{element}</li>
             })
         }

     </ul>
   )}
    </div>
  );
}

export default Item
