import { useState } from "react";
// import LapsTwo from "../components/Files/LapsTwo";
// import First from "First"
import Login from "./Login";


function Diamond(){
    const [login,setLogin]=useState("");
    
  
    const loginHandler=(log)=>{
        setLogin(log)
    }
   
 return(
    <div className="login">
        <h1>Diamond</h1>


        {!login && <Login islogin={loginHandler} />}
        {/* {login && <First/>} */}
    </div>
 ) 
}



export default Diamond