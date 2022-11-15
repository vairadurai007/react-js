import { Component } from "react";
import './props.css'


class Child extends Component {

  render() {
    return (
      <div className="childContainer">
        <h1>{this.props.data}</h1>
        <h2>{this.props.changeData}</h2>
      </div>
    )
  }
}


export default Child;