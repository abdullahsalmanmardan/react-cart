import React, { useContext } from 'react'
import './Cart.css'
import {CartContent} from './Cart'
import ContextItem from './ContextItem'


const Item = () => 
{
  
  // parent class se data idher mil jay ga humin data ma sab avaliable ha
  const {state}=useContext(CartContent);
    // const data=data1.state.item;
  // console.log("the data is ",{state})
  
   return (
    <>
      {state.item.map((arr,id)=>
      {
        return(
        
          <article key={id+1}>
            <ContextItem info={arr} />
          </article>   
          
        )
      })} 
      </>
  )
}
export default Item;