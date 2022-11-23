import { useEffect, useState } from "react";
import './BookLibrary.css'

function BookAddFunction(props) {

    const [bookShop, setBookShop] = useState({
        author: '',
        quantity: "",
        price: ''
    })

    const [submitButton, setSubmitButton] = useState(true)

    const onChangeFunction = (event) => {
        setBookShop({ ...bookShop, [event.target.name]: event.target.value })
    }

    const submitFunction = (event) => {
        event.preventDefault()

        if (bookShop.author && bookShop.quantity && bookShop.price) {
            props.submitFunction(bookShop)
        }
        setBookShop({ ...bookShop, author: '', quantity: '', price: '' })
    }

    const updateFormFunction = (event) => {
        event.preventDefault()

        if (bookShop.author && bookShop.quantity && bookShop.price) {
            props.updateFormFunction(bookShop)
            setSubmitButton(true)
        }

        setBookShop({ ...bookShop, author: '', quantity: '', price: '' })
    }

    useEffect(() => {
        setBookShop({ ...bookShop, ...props.listValues })
        setSubmitButton(props.updateButton)
    }, [props.listValues], [props.updateButton])

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

                    {submitButton ? <button className='form-button' onClick={submitFunction}>submit</button> : <button className='form-button' onClick={updateFormFunction}>update</button>}
                </form>

            </div>

        </div>
    )
}

export default BookAddFunction;