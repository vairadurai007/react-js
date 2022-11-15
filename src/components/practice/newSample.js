import { useState } from 'react'


function NewSample() {
    const [newSample, setNewSample] = useState({
        name: '',
        age: '',
        sport: ''
    })
    const inputHandler =(event)=>{
            // setNewSample({[event.target.name]:event.target.value})
            setNewSample((previous)=>{
                return{ ...previous,...{[event.target.name]:event.target.value}}
            })
            console.log(newSample);
            console.log(event.target.name,event.target.value);
           
        }
    
    const submitHandler =(event)=>{
        event.preeventDefault();
        console.log(newSample);
    }
    return (
        <div>
            <form onSubmit={submitHandler} >
                <label>Ender Name
                    <input type="text"  placeholder='Name' name='name' value={newSample.name} onChange={inputHandler} />
                </label>
                <label>Ender Age
                    <input type="text" placeholder='Age' name='age' value={newSample.age} onChange={inputHandler} />
                </label>
                <label>Ender Sports
                    <input type="text" placeholder='Sport' name='sport' value={newSample.sport} onChange={inputHandler} />
                </label>
            </form>
        </div>
    );
}


export default NewSample;





