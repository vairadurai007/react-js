import './BookLibrary.css'
import BookAddFunction from "./BookAddfunction";
import BookListFunction from "./BookListFunction";
import { Link, Routes, Route } from 'react-router-dom';

import { useState } from 'react';

function MainFormFunction() {

    const recivedata = (event) => {
        setFormValues([...formValues, event])
    }

    const [formValues, setFormValues] = useState([])

    return (

        <div className='main-container'>

            <div className='mini-container'>
                <h1 className='main-heading'>Book Library</h1>
            </div>

            <div>
                <Link to='/'><button className='list-button'>Book List</button></Link>
                <Link to='/form'><button className='Add-button'>Add Book</button></Link>

            </div>

            <div>
                <Routes>
                    <Route exact path='/' element={<BookListFunction formValues={formValues} />} />
                    <Route exact path='/form' element={<BookAddFunction submit={recivedata} />} />
                </Routes>
            </div>

        </div>
    )
}

export default MainFormFunction;