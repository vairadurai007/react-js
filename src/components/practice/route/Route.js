import { Component } from "react";
import Home from "./Home";
import User from "./User";
import { Routes, Route, Link } from 'react-router-dom'



class Head extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/home">Home</Link></li><br></br>
                    <li><Link to="/user">User</Link></li>
                </ul>
                <Routes>
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/user" element={<User />} />
                </Routes>
            </div>
        )
    }
}

export default Head;