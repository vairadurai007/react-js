import { Component } from 'react'
// import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import './Form.css'

class ChildForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {(this.props.data).map((data, index) => {
                    return (
                        <div className="childContainer">
                            <div key={data} className="miniChildContainer">
                                <h1 className="childHeading">Book List <span>{index + 1}</span></h1>
                                <ul className="childUl">
                                    <li>{data.author}</li>
                                    <li>{data.quantity}</li>
                                    <li>{data.price}</li>
                                </ul>
                                <button className="editButton">Edit</button>
                            </div>
                        </div>
                    )
                })}

            </div>
        )
    }
}


export default ChildForm;