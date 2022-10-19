import React, { createContext, useReducer } from 'react'
import './Cart.css'
import Data from "./Data"
import Item from './Item'
import {reducer} from './reducer'
// is ma sirf cart ka outline div ho ga
// items ma sareee items ko hum show karin gay


// idher hum ne banaya ha child class ma call kar dain gay
export const CartContent=createContext(); 

const initialState=
{
  item:Data,
  totalAmount:0,
  totalItem:0,
};
const Cart = () => 
{

  // here state is equal to initial data we have intilized
  // reducer is a function that takes a state(initialval) and action and return new state to state varibel;
  // dispatch will activate the action in the reducer function.
  // dispatch matlab ke uss action kia perform karna ha
  const [state,dispatch]=useReducer(reducer,initialState)



  const deleteItem=(id)=>
  {
  
    return dispatch({
      // these properties are the now the action property in the reducer 
      // action will be performed on these basis now
      type:"removeItem",
      payload:id
    })
  }


  const increment=(id)=>
  {
  
    return dispatch({
      // these properties are the now the action property in the reducer 
      // action will be performed on these basis now
      type:"increment",
      payload:id
    })
  }


  const decrement=(id)=>
  {
  
    return dispatch({
      // these properties are the now the action property in the reducer 
      // action will be performed on these basis now
      type:"decrement",
      payload:id
    })
  }


  return (
   <div className="container mycontainer">
    <div className="row heading">
      <div className="col-2 col-sm-2 col-md-2">

        <span className='cartleft'><i className="fa-solid fa-arrow-left"></i></span>
      </div>
      <div className="col-8 col-sm-8 col-md-6 ">
          <h6>Continue Shopping </h6>
      </div>
      <div className="col-2 col-sm-2 col-md-4 ">
          <span className='cart'><i className="fa-solid fa-cart-shopping"></i></span>
      </div> 
      </div>

      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 ">
          <h2>Shopping cart</h2>
          
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 ">
          <h5>you have 5 items in the cart</h5>
        </div>
      </div>
      <br />
      <br />

      {/* all data stored in the provider and can be fetched in clild class */}
      {/* state pora hi send ho jay ga all three attributes */}
      
      <CartContent.Provider value={{state , deleteItem, increment,decrement}}>
        <Item/>
      </CartContent.Provider>


    </div>
 
  )
}
export default Cart;
