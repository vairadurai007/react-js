import { Component } from "react";
import Child from './Child'
import './props.css'

class Parent extends Component {
  constructor() {
    super()
    this.state = {
      data: "",
      changeData: ""
    }
  }

  changeHandler = (event) => {
    this.setState = (() => {
      return { [event.target.name]: event.target.value }
    })
    console.log({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <Child data={this.state.data} changeData={this.state.changeData} />
        <div>
          <label>props Practice
            <input type='text' name='data' value={this.state.data} onChange={this.changeHandler} />
          </label>
          <label>props Practice
            <input type='text' name="changedata" value={this.state.data} onChange={this.changeHandler} />
          </label>
        </div>
      </div>
    )
  }
}

export default Parent;