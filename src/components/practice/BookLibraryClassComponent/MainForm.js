
import { Component } from "react";
import { Routes, Route, Link } from 'react-router-dom'
import ParentForm from "./BookAddForm";
import ChildForm from "./BookList";

class Main extends Component {
    
    constructor(){
        super()
        this.state={
            data:[]
        }
    }

    mainFunction=(value)=>{
        this.setState({data:value})
    }

    render() {
        return (
            <div>
                <div className='mainContainer'>
                    <div className='miniContainer'>
                        <h1 className='mainHeading'>Book Library</h1>
                    </div>
                    <div>
                        <Link to={'/'}><button className='listButton'>Book List</button></Link>
                        <Link to={'/form/'}><button className='AddButton'>Add Book</button></Link>
                    </div>
                    <div>
                        <Routes>
                            <Route path="/" element={<ChildForm data={this.state.data} />} />
                            <Route path="/form" element={<ParentForm submitFunction={this.mainFunction} />} />
                        </Routes>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;