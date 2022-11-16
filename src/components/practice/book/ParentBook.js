import { useState } from "react";
import './UserLoginForm.css'

export default function UserLoginForm () {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

  const  submitFunction=()=>{
        localStorage.setItem('username',JSON.stringify(userName))
        localStorage.setItem('password',JSON.stringify(password))
    }

    return (
        <div className="container">
            <form>
                <label>userName
                    <input name="name" type='text' placeholder="User Name" value={userName} onChange={
                        (event) => { setUserName(event.target.value) }
                    } />
                </label><br></br><br></br>
                <label>password
                    <input name="name" type='password' placeholder="Password" value={password} onChange={
                        (event) => { setPassword(event.target.value) }
                    } />
                </label><br></br><br></br>
                <button onClick={submitFunction}>Submit</button>
            </form>
        </div>
    )
}