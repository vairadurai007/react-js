import { Component } from "react";
import "./Create.css"
import Update from "./Update";
import Read from './Read'



class CrudForm extends Component {
  constructor() {
    super()
    this.state = {
      visible: false,
      "data": false
    }
  }

  render() {

    return (
      <div className="container">
        <div className="childContainer">
          <h1>Book <span>Library</span></h1>
          <div>
            <button className="listButton" onClick={() => {
              this.setState({ visible: true })
            }}>Book List</button>
            <button className="editButton" onClick={() => {
              this.setState({ 'data': true })
            }}>Add Books</button>
          </div>
        </div>
        <div>
          <div>{this.state.data ? <Read /> : null}</div>
          <div>{this.state.visible ? <Update /> : null}</div>
        </div>
      </div>
    )
  }
}

export default CrudForm;