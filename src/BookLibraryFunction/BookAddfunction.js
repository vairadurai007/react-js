import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './BookLibrary.css'

function BookAddFunction(props) {

    const { listValues, updateOnclickButton } = props;
    const [bookShop, setBookShop] = useState({
        author: '',
        quantity: "",
        price: ''
    });
    const [clickButton, onClickButton] = useState(true);
    const navigate = useNavigate();

    const userInputData = (event) => {
        setBookShop({ ...bookShop, [event.target.name]: event.target.value })
    }

    const submitFormData = (event) => {
        event.preventDefault()

        if (bookShop.author && bookShop.quantity && bookShop.price) {
            props.submitFormData(bookShop)
        }

        setBookShop({ ...bookShop, author: '', quantity: '', price: '' })
    }

    const updateFormData = (event) => {
        event.preventDefault()

        if (bookShop.author && bookShop.quantity && bookShop.price) {
            props.updateFormData(bookShop)
            props.clickButton(true)
        }

        setBookShop({ ...bookShop, author: '', quantity: '', price: '' })
        navigate('/')
    }

    useEffect(() => {
        setBookShop({ ...bookShop, ...listValues })
        onClickButton(updateOnclickButton)
    }, [])

    return (
        <div className='container'>
            <div className='form-container'>

                <form>
                    <h1 className='form-heading'>Book Details</h1>
                    <div className='inputBox'>
                        <label>Author Name</label><br></br>
                        <input type="text"
                            value={bookShop.author}
                            placeholder='Name'
                            name='author'
                            onChange={userInputData} />
                    </div><br></br>

                    <div className='inputBox'>
                        <label>Book Quantity</label><br></br>
                        <input type="text"
                            value={bookShop.quantity}
                            placeholder='Quantity'
                            name='quantity'
                            onChange={userInputData} />
                    </div><br></br>

                    <div className='inputBox'>
                        <label>Book Price</label><br></br>
                        <input type="text"
                            value={bookShop.price}
                            placeholder='Price'
                            name='price'
                            onChange={userInputData} />
                    </div><br></br>

                    {clickButton ? <button className='form-button'
                        onClick={submitFormData}>submit</button>
                        : <button className='form-button'
                            onClick={updateFormData}>update</button>}
                </form>

            </div>

        </div>
    )
}

export default BookAddFunction;