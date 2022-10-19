// items code for good readibility

import React, { useContext } from 'react'
import { CartContent } from './Cart';
const ContextItem = ({info}) => 
{
  // const ke agy same name rakho to usy pata chal jata ha
  const {deleteItem}=useContext(CartContent)

  const {increment}=useContext(CartContent)

  const {decrement}=useContext(CartContent)
  // console.log("the delete item is ",{deleteItem})
  // const deleteItem= deleteItem1.deleteItem;
  const {id,img,name,color,price,quantity}=info;
 
 
  return (
    <div  className="row myRow">
      
      <div className="col-2 col-sm-2 col-md-2 ">
      <img src={img} alt={name} className="img-fluid" />
      </div>
      <div className="col-3 col-sm-3 col-md-3 ">
        <h5>{name}</h5>
        <p>Color Avaliable is {color}</p>
      </div>
      <div className="col-3 col-sm-3 col-md-3 ">
        {/* increase decreas button */}
          
            <div className="row">
              <div className="col-4 col-sm-4 col-md-4">
                <i onClick={()=>increment(id)} className="fa-solid fa-plus"></i>
              </div>
              <div className="col-4 col-sm-4 col-md-4">

                <p>{quantity}</p>
              </div>
              <div className="col-4 col-sm-4 col-md-4 ">
                  <i className="fa-solid fa-minus" onClick={()=>decrement(id)}></i>
              </div>
            </div>
          
      </div>
      <div className="col-3 col-sm-2 col-md-2 ">
        <p>RS-{price}</p>
      </div>

      <div className="col-1 col-sm-1 col-md-1 ">
        <span><i className="fa-solid fa-trash" 
        onClick={()=>deleteItem(id)}></i></span>
      </div>


    </div>
  )
}

export default ContextItem