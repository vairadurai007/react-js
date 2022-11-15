// import { render } from "@testing-library/react";
import { Component } from "react";
import "./LoginForm.css"
import { BrowserRouter, Route } from 'react-router-dom'


class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            isValid: false
        }
        // this.inputHandler = this.inputHandler.bind(this);
        // this.loginHandler = this.loginHandler.bind(this);
    }


    inputHandler = (event) => {
        this.setState(() => {
            return { [event.target.name]: event.target.value }
        })
        console.log({ [event.target.name]: event.target.value });
        console.log(this.state.email,this.state.password);
    }

    loginHandler = (event) => {
        event.preventDefault();
        // if (this.state.email && this.state.password) {

        //     if (this.state.email.includes('@')) {

        //         if (this.state.password.length >= 6) {
        //             console.log(this.state.email, this.state.password);
        //         }

        //         else { 
        //             console.log('worng Password (or) Password length is Short');
        //         }
        //     }
        //     else {
        //         console.log('Invalid email');
        //     }
        // }
    }


    render() {
        return (

            <div className="container">
                <form>
                    <fieldset>
                        <legend>Login</legend>
                        <label>
                            <input type="email" placeholder="Enter a Email" name="email" value={this.state.email} onChange={this.inputHandler} />
                        </label>
                        <label>
                            <input type="password" placeholder="Enter a Password" name="password" value={this.state.password} onChange={this.inputHandler} />
                        </label>
                        <button onClick={this.loginHandler}>Login</button>
                    </fieldset>
                </form>
            </div>

        )
    }
}


export default LoginForm;