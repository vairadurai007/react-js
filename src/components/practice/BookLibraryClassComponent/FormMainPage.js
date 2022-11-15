import React, { Component } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './Form.css'
import Form from './Form'

class FormMainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: []
        }
    }

    reciveData = (value) => {
        this.setState({ value })
    }

    render() {
        return (
                <div className='mainContainer'>
                    <div className='miniContainer'>
                        <h1 className='mainHeading'>Book Library</h1>
                    </div>
                    <div>
                        <Link to={'/'}><button onClick={this.fun} className='listButton'>Book List</button></Link>
                        <Link to={'/form'}><button className='AddButton'>Add Book</button></Link>
                    </div>
                    <div>
                        <Routes>
                           {<Route path='/form' element={<Form submitFunction={this.reciveData} />} />}
                        </Routes>
                    </div>
                    <div>
                        {this.state.value.map((data, index) => {
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
                </div>
        )
    }
}


export default FormMainPage;