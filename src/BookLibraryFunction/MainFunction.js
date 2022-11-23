import './BookLibrary.css'
import BookAddFunction from "./BookAddfunction";
import BookListFunction from "./BookListFunction";
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function MainFormFunction(props) {

    const [formValues, setFormValues] = useState([])

    const [storeListValues, setStoreListValues] = useState([])

    const [updateButton, setUpdateButton] = useState(true)

    const [reciveIndex, setReciveIndex] = useState()

    const recivedata = (formValue) => {
        setFormValues([...formValues, formValue])
    }

    const index = (index) => {
        setReciveIndex(index)
    }

    const updateFormFunction = (reciveFormValue) => {
        formValues[reciveIndex] = reciveFormValue
    }

    const reciveEditFunction = (listValue, index) => {
        setStoreListValues(listValue)
        setUpdateButton(false)
    }

    return (

        <div className='main-container'>

            <div className='mini-container'>
                <h1 className='main-heading'>Book Library</h1>

                <div>
                    <Link to='/'><button className='list-button'>Book List</button></Link>
                    <Link to='/form'><button className='Add-button'>Add Book</button></Link>
                </div>
            </div>

            <div className='list-group'>
                <Routes>
                    <Route exact path='/' element={<BookListFunction index={index} editFunction={reciveEditFunction} formValues={formValues} />} />
                </Routes>
            </div>

            <div>
                <Routes>
                    <Route exact path='/form' element={<BookAddFunction updateButton={updateButton} updateFormFunction={updateFormFunction} listValues={storeListValues} submitFunction={recivedata} />} />
                </Routes>
            </div>

        </div>
    )
}

export default MainFormFunction;