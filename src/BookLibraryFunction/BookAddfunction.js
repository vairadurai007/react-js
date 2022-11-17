import { useState } from "react";
import './BookLibrary.css'

function BookAddFunction(props) {

    const [bookShop, setBookShop] = useState({
        author: '',
        quantity: "",
        price: ''
    })

    const [bookCollections, setBookCollections] = useState([])

    const [submitButton, setSubmitButton] = useState('true')

    const onChangeFunction = (event) => {
        setBookShop({ ...bookShop, [event.target.name]: event.target.value })
    }

    const submitFunction = (event) => {
        event.preventDefault()

        if (bookShop.author && bookShop.quantity && bookShop.price) {
            setSubmitButton('false')
            setBookCollections([...bookCollections, bookShop])
            props.submit(bookShop)
        }

        setBookShop({ ...bookShop, author: '', quantity: '', price: '' })
    }


    return (

        <div className='container'>

            <div className='form-container'>
                <form>
                    <h1 className='form-heading'>Book Details</h1>
                    <div className='inputBox'>
                        <label>Author Name</label><br></br>
                        <input type="text" value={bookShop.author} placeholder='Name' name='author' onChange={onChangeFunction} />
                    </div><br></br>

                    <div className='inputBox'>
                        <label>Book Quantity</label><br></br>
                        <input type="text" value={bookShop.quantity} placeholder='Quantity' name='quantity' onChange={onChangeFunction} />
                    </div><br></br>

                    <div className='inputBox'>
                        <label>Book Price</label><br></br>
                        <input type="text" value={bookShop.price} placeholder='Price' name='price' onChange={onChangeFunction} />
                    </div><br></br>

                    {submitButton ? <button className='form-button' onClick={submitFunction}>Submit</button> : <button className='form-button' onClick={submitFunction}>Update</button>}
                </form>

            </div>

        </div>
    )
}

export default BookAddFunction;