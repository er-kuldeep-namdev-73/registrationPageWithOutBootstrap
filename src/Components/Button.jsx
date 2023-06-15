import { useState } from "react";

function Welcome(){
    const[welcome,setWelcome]=useState()   
return (
    <>
<button onClick={()=>{setWelcome("Welcome")}}>Welcome</button>
<button onClick={()=>{setWelcome("Hii")}}>Hii</button>
<button onClick={()=>{setWelcome("How Are You?")}}>How</button>
<button onClick={()=>{setWelcome("Thank You")}}>Thank You</button><br/>
<b>{welcome}</b>
</>
)
}
export default Welcome;