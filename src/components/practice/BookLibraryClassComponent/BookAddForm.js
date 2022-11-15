import { Component } from 'react';
import './Form.css'

class ParentForm extends Component {

    constructor(props) {
        super(props)
        this.state =
        {
            book: {
                author: '',
                quantity: '',
                price: '',
            },
            value: []
        }
        this.submitFunction = this.submitFunction.bind(this)
    }

    onChangeFunction = (event) => {
        this.setState(() => {
            return { book: { ...this.state.book, [event.target.name]: event.target.value } }
        })
    }

    submitFunction = (event) => {
        event.preventDefault();
        if (this.state.book.author && this.state.book.quantity && this.state.book.price) {
            this.state.value.push({ ...this.state.book })
            this.props.submitFunction(this.state.value)
        }
        this.setState({ book: { ...this.state.book, author: '', quantity: '', price: '' } })

    }

    render() {

        return (
            <div className='container'>
                <div className='formContainer'>
                    <h1 className='formHeading'>Book Library</h1>
                    <form>
                        <div className='inputBox'>
                            <input type="text" value={this.state.book.author} name='author' onChange={this.onChangeFunction} />
                            <label>Author Name </label>
                        </div><br></br>
                        <div className='inputBox'>
                            <input type="text" value={this.state.book.quantity} name='quantity' onChange={this.onChangeFunction} />
                            <label>Book Quantity</label>
                        </div><br></br>
                        <div className='inputBox'>
                            <input type="text" value={this.state.book.price} name='price' onChange={this.onChangeFunction} />
                            <label>Book Price</label>
                        </div><br></br>
                        <button className='formButton' onClick={this.submitFunction}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ParentForm;