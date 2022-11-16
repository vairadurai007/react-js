import { useEffect, useState } from "react";
import './book.css'

function BookAddFunction() {

    const [bookShop, setBookShop] = useState({
        author: '',
        quantity: "",
        price: ''
    })

    const [bookCollections, setBookCollections] = useState([])

    const [localStorageValue, setLocalStorageValue] = useState(JSON.parse(localStorage.getItem('bookCollections')))


    const [submitButton, setSubmitButton] = useState('true')

    const onChangeFunction = (event) => {
        setBookShop({ ...bookShop, [event.target.name]: event.target.value })
    }

    const submitFunction = (event) => {
        event.preventDefault()

        if (bookShop.author && bookShop.quantity && bookShop.price) {
            setSubmitButton('false')
            setBookCollections((ls) => [...ls, bookShop])
            // setBookShop({ ...bookShop, author: '', quantity: '', price: '' })
            setLocalStorageValue(JSON.parse(localStorage.getItem('bookCollections')))
        }
    }

    localStorage.setItem('bookCollections', JSON.stringify(bookCollections))

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
                    {submitButton ? <button className='form-button' onClick={submitFunction}>Submit</button> : <button disabled={'true'} className='form-button' onClick={submitFunction}>Update</button>}
                </form>
            </div>
            <div>
                <div className='flex-container'>
                    {(localStorageValue).map((data, index) => {

                        return (

                            <div key={index} className="mini-child-container">
                                <h1 className="child-heading">Book List <span>{index + 1}</span></h1>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Author Name</th>
                                            <th>Book Quantity</th>
                                            <th>Book Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{data.author}</td>
                                            <td>{data.quantity}</td>
                                            <td>{data.price}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className="edit-button">Edit</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )

}

export default BookAddFunction;