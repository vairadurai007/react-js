import './BookLibrary.css'
import BookAddFunction from "./BookAddfunction";
import BookListFunction from "./BookListFunction";
import { Link, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function MainFormFunction() {

    const [formValues, setFormValues] = useState([])

    const [storeListValues, setStoreListValues] = useState([])

    const recivedata = (formValue) => {
        setFormValues([...formValues, formValue])
    }

    // const reciveEditFunction = (event) => {
    //     setStoreListValues([...storeListValues, event])
    // }

    const reciveEditFunction = (listValue, index) => {
        setStoreListValues(index);
    }
    // console.log(storeListValues);
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
                    <Route exact path='/' element={<BookListFunction editFunction={reciveEditFunction} formValues={formValues} />} />
                </Routes>
            </div>

            <div>
                <Routes>
                    <Route exact path='/form' element={<BookAddFunction listValues={storeListValues} value={reciveEditFunction} submitFunction={recivedata} />} />
                </Routes>
            </div>

        </div>
    )
}

export default MainFormFunction;