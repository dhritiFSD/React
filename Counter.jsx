import React, {useState} from "react";

function Counter(){
    let[count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    };
    const decrement=()=>{
        if(count>0){
            setCount(count-1);
        }
    };
    return(
        <>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"120px",paddingLeft:"500px"}}>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
           
        </div>
        </>
    )
}
export default Counter;