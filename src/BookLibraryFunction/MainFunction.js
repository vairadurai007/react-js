import './BookLibrary.css'
import BookAddFunction from "./BookAddfunction";
import BookListFunction from "./BookListFunction";
import { Link, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function BookLibrary() {

    const [formValues, setFormValues] = useState([]);
    const [storeListValues, setStoreListValues] = useState([]);
    const [updateOnclickButton, setUpdateOnclickButton] = useState(true);
    const [reciveIndex, setReciveIndex] = useState(false);

    const submitFormData = (bookShop) => {
        setFormValues([...formValues, bookShop])
    }

    const listIndex = (index) => {
        setReciveIndex(index)
    }

    const clickButton = (buttonValue) => {
        setUpdateOnclickButton(buttonValue)
    }

    const updateFormData = (bookShop) => {
        formValues[reciveIndex] = bookShop;
        setStoreListValues('')
    }

    const deleteListData = (listValues) => {
        setFormValues(listValues)
    }

    const editListData = (listValue) => {
        setStoreListValues(listValue)
        setUpdateOnclickButton(false)
    }

    const resetForm = () => {
        setStoreListValues('')
        setUpdateOnclickButton(true)
    }

    return (
        <div className='main-container'>

            <div className='header'>
                <h1 className='main-heading'>Book Library</h1>
                <div className='main-buttons'>
                    <Link to='/'>
                        <button className='main-button' >Book List</button>
                    </Link>
                    <Link to='/form'>
                        <button className='main-button' onClick={resetForm} >Add Book</button>
                    </Link>
                </div>
            </div>

            <div>
                <Routes>
                    <Route exact path='/'
                        element={
                            <BookListFunction
                                listIndex={listIndex}
                                editListData={editListData}
                                deleteListData={deleteListData}
                                formValues={formValues}
                            />}
                    />
                </Routes>
            </div>

            <div>
                <Routes>
                    <Route exact path='/form'
                        element={
                            <BookAddFunction
                                updateOnclickButton={updateOnclickButton}
                                updateFormData={updateFormData}
                                clickButton={clickButton}
                                listValues={storeListValues}
                                submitFormData={submitFormData}
                            />}
                    />
                </Routes>
            </div>

        </div>
    )
}

export default BookLibrary;