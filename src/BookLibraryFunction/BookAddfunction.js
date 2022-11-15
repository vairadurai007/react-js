import { useEffect, useState } from "react";
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
            props.submit(bookCollections)
        }

        setBookShop({ ...bookShop, author: '', quantity: '', price: '' })
    }

    useEffect(() => {
        localStorage.setItem('bookCollections', JSON.stringify(bookCollections))
    }, [bookShop])

    return (

        <div className='container'>
            <div className='form-container'>
                <h1 className='form-heading'>Book Library</h1>
                <form>
                    <div className='inputBox'>
                        <input type="text" value={bookShop.author} name='author' onChange={onChangeFunction} />
                        <label>Author Name </label>
                    </div><br></br>
                    <div className='inputBox'>
                        <input type="text" value={bookShop.quantity} name='quantity' onChange={onChangeFunction} />
                        <label>Book Quantity</label>
                    </div><br></br>
                    <div className='inputBox'>
                        <input type="text" value={bookShop.price} name='price' onChange={onChangeFunction} />
                        <label>Book Price</label>
                    </div><br></br>
                    {submitButton ? <button className='form-button' onClick={submitFunction}>Submit</button> : <button className='form-button' onClick={submitFunction}>Update</button>}
                </form>
            </div>
        </div>
    )
}

export default BookAddFunction;