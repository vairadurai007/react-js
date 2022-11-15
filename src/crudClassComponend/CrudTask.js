import { Component } from "react";
import './crudClassComponend.css'

class CrudTask extends Component {
    constructor() {
        super()
        this.state = {
            book: "",
            author: '',
            quantity: '',
            price: '',
            bookitems: [], authoritems: [], quantityitems: [], priceitems: []
        }
    }
    bookChangeHandler = (event) => {
        this.setState({ book: event.target.value }
        )
    }
    authorChangeHandler = (event) => {
        this.setState({ author: event.target.value }
        )
    }
    quantityChangeHandler = (event) => {
        this.setState({ quantity: event.target.value }
        )
    }
    priceChangeHandler = (event) => {
        this.setState({ price: event.target.value }
        )
    }
    submitHandler = (event) => {
        event.preventDefault();
        this.setState({
            book: "",
            author: '',
            quantity: '',
            price: '',
            bookitems: [...this.state.bookitems,...this.state.book,],
            authoritems: [...this.state.authoritems, ...this.state.author,],
            quantityitems: [...this.state.quantityitems, ...this.state.quantity],
            priceitems: [this.state.priceitems, ...this.state.price]
        })
    }

    render() {
        return (
            <div className='container'>           
                <form>
                <label>Book Name
                    <input type="text" placeholder="Enter a Name" value={this.state.name} onChange={this.bookChangeHandler} />
                </label>
                <label>Book Author
                    <input type="text" placeholder="Enter Author Name" value={this.state.author} onChange={this.authorChangeHandler} />
                </label>
                <label>Quantity
                    <input type="text" placeholder="Enter Quantity" value={this.state.quality} onChange={this.quantityChangeHandler} />
                </label>
                <label>Book Price
                    <input type="text" placeholder="Enter Book Price" value={this.state.price} onChange={this.priceChangeHandler} />
                </label>
                <button onClick={this.submitHandler}>Submit</button>
            </form>
                <div>{this.state.bookitems}</div>
                <div>{this.state.authoritems}</div>
                <div>{this.state.quantityitems}</div>
                <div>{this.state.priceitems}</div>
            </div>

        )
    }
}


export default CrudTask;

