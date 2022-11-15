import { useState,useEffect } from 'react';
import './login.css'




function Login (props){

    // useState Method

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const [effect,setEffect]=useState(false);

   const emailHandler=(event)=>{
    
         setEmail(event.target.value);
    }
   const  passwordHandler=(event)=>{
         setPassword(event.target.value);
   } 
   const submitHandler=(event)=>{
         event.preventDefault();

        // if(email.includes('@')){
        //     console.log(email);
        //     if( password.length>=6){
        //         console.log(password);
        //     }else{
        //         alert('Your password is wrong')
        //     }
        //     //props.islogin(true)
        //     // console.log(email,password);
        // }
        // else{
        //     alert('Your email is wrong')
        // }
         }
         useEffect(()=>{
            if(email.includes('@') && password.length<=6){
                setEffect(true);
            }
        },[email,password])
   
    return(
        <div className='container'>
            <form onSubmit={submitHandler} >
                <label>Ender Email
                    <input type="text" placeholder='email' value={email}  onChange={emailHandler}/>
                </label>
    
                <label>Ender Password
                    <input type="password" placeholder='email' value={password}  onChange={passwordHandler} />
                </label>
               {effect?<button>Submit</button>:<button disabled="true">Submit</button>}
            </form>
        </div>
    );
}




export default Login;