import { useState } from "react";
import './BookLibrary.css'

function Child() {

    const [book, setBook] = useState([])
    const [author,setAuthor]=useState('')

    const onChangeFunction = () => {
        let book={
            author,
            quantity,
            price
        }
    }

    return (

        <div className='container'>
            <div className='form-container'>
                <h1 className='form-heading'>Book Library</h1>
                <form>
                    <div className='inputBox'>
                        <input type="text" value={author} name='author' onChange={onChangeFunction=(event)=>{
                            author:event.target.value
                        }} />
                        <label>Author Name </label>
                    </div><br></br>
                    <div className='inputBox'>
                        <input type="text" value={quantity} name='quantity' onChange={onChangeFunction} />
                        <label>Book Quantity</label>
                    </div><br></br>
                    <div className='inputBox'>
                        <input type="text" value={price} name='price' onChange={onChangeFunction} />
                        <label>Book Price</label>
                    </div><br></br>
                    <button className='form-button' onClick={submitFunction}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Child;