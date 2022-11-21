import { useEffect, useState } from "react";
import './BookLibrary.css'

function BookAddFunction(props) {

    const [bookShop, setBookShop] = useState({
        author: '',
        quantity: "",
        price: ''
    })

    const [bookCollections, setBookCollections] = useState([])

    const [submitButton, setSubmitButton] = useState('')

    const [reciveListValues, setReciveListValues] = useState([])

    const onChangeFunction = (event) => {
        setBookShop({ ...bookShop, [event.target.name]: event.target.value })
    }

    const submitFunction = (event) => {
        event.preventDefault()

        if (bookShop.author && bookShop.quantity && bookShop.price) {
            setBookCollections([...bookCollections, bookShop])
            props.submitFunction(bookShop)
        }

        // setBookShop({ ...bookShop, author: '', quantity: '', price: '' })
    }

    useEffect(() => {
        // setBookShop({ ...bookShop, ...props.listValues })
        const value =
        setReciveListValues([...reciveListValues, props.listValues])
    }, [props.listValues])


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

                    <button className='form-button' onClick={submitFunction}>submit</button>
                </form>

            </div>

        </div>
    )
}

export default BookAddFunction;