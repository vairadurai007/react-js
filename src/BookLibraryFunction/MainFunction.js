import './BookLibrary.css'
import { Route, Routes, Link } from "react-router-dom";
import BookAddFunction from "./BookAddfunction";
import BookListFunction from "./BookListFunction";
import { useState } from 'react';

function MainFormFunction() {

    const [formValues, setFormValues] = useState([])

    const recivedata = (event) => {
        setFormValues(event)
    }

    return (

        <div>
            <div className='main-container'>
                <div className='mini-container'>
                    <h1 className='main-heading'>Book Library</h1>
                </div>
                <div>
                    <Link to={'/'}><button className='list-button'>Book List</button></Link>
                    <Link to={'/form'}><button className='Add-button'>Add Book</button></Link>
                </div>
                <div>
                    <Routes>
                        <Route path="/" element={<BookListFunction formValues={formValues} />} />
                        <Route path="/form" element={<BookAddFunction submit={recivedata} />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default MainFormFunction;