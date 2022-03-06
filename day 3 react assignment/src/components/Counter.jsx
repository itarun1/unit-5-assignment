import { useState } from "react";
 export function Counter(props){
    // console.log(props)
    // const value=0;
    const[counter,setCounter]=useState(0);
    return(
        <div>
        <h3>Counter :{counter}</h3>
        <button onClick={()=>{
           if(counter>=0&&counter<10)
        setCounter(counter+1)
        }}>Add</button>
          <button onClick={()=>{
               if(counter>0)
        setCounter(counter-1)
        }}>Sub</button>
         <button onClick={()=>{
            //   if(counter<5)
        setCounter(counter*2)
        }}>Double</button>
        </div>
    )
}