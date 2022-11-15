import React, { Component } from 'react'
import Read from './Read'
import "./Create.css"

class Update extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='bookListContainer'>
        <div>
          <h1 className='bookListHeading'>Book List</h1>
          <div className='child-bookListContainer'>
            <ol className='bookListOl'>
              <li>Name{this.props.name}</li>
              <li>Author{this.props.author}</li>
              <li>Quantity {this.props.quantity}</li>
              <li>Price {this.props.price}</li>
            </ol>
            <button className='child-bookListEditButton'>Edit</button>
            <button className='child-bookListDeleteButton'>Delete</button>
          </div>
        </div>
      </div>
    )
  }
}



export default Update;