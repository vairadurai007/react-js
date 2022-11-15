import { Component } from "react";
import Update from "./Update";



class Read extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:'hi',
      author:'',
      quantity:'',
      price:''
    }
    this.stateHandler=this.stateHandler.bind(this);
  }

  submitHandler=(event)=>{
    return({[event.target.name]:event.target.value})
  }
  stateHandler=()=>{
    this.setState(()=>{
      return(
        {
          name:this.state.name,
          author:this.state.author,
          quantity:this.state.quantity,
          price:this.state.price
        }
      )
  })
}
  render() {
    return (
      <div className="addBooksContainer">
        <h1>Add Books</h1>
        <div className="addBooksChildContainer">
          <form>
            <label> Book Name
              <input type="text" placeholder="Enter Book Name" value={this.state.name}  onChange={this.stateHandler}/>
            </label><br></br><br></br>
            <label>Book Author
              <input type="text" placeholder="Enter Book Author" value={this.state.author} onChange={this.stateHandler} />
            </label><br></br><br></br>
            <label>Book Quantity
              <input type="text" placeholder="Enter Book Quantity" value={this.state.quantity} onChange={this.stateHandler} />
            </label><br></br><br></br>
            <label>Book Price
              <input type="text" placeholder="Enter Book Price" value={this.state.price} onChange={this.stateHandler}/>
            </label><br></br><br></br>
            <button onClick={this.submitHandler} className="submitButton">Submit</button>
          </form>
        </div>
        <Update data={this.stateHandler}/>
      </div>
    )
    console.log(this.state.name);
  }
}



export default Read;