// state ma initial value ai ha idher
// our dispatch se hum action ko activate karin gay 
// dispatch ma type id de wo action ko mil jayga
export const reducer=(state,action)=>
{
    if(action.type==="removeItem")
    {
        
        return {
            // old state as it is return kar do our item and changing kar do
            ...state,
            item: state.item.filter((arr)=>
            {
                 return arr.id!==action.payload
            })
        };
    }

    if(action.type==="increment")
    {
        let updatedData=state.item.map((ele)=>
        {
            // jaha pe match ho gaya ha wha pe 
            // us waly object ko change kar do
            if(ele.id===action.payload)
            {
                return{
                    ...ele,
                    // ab hum uss object ma hain 
                        quantity:ele.quantity+1
                }
            }
            return ele;        
        })
        // item ma wo wala object jo chane hoa ha wo return ho jay ga
        return {...state,item:updatedData}
    }

    if(action.type==="decrement")
    {
        let updatedData=state.item.map((ele)=>
        {
            // jaha pe match ho gaya ha wha pe 
            // us waly object ko change kar do
            if(ele.id===action.payload )
            {
                return{
                    ...ele,
                    // ab hum uss object ma hain 
                        quantity:ele.quantity-1
                }
            }
            // return that element to the map method
             return ele;      
        })
        // that map array is then filtered again 
        .filter((ele)=>
        {
           
          return ele.quantity!=0    
        })
        // item ma wo wala object jo chane hoa ha wo return ho jay ga
        return {...state,item:updatedData}
    }

  
    return state;
}
