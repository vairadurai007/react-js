import './BookLibrary.css'
import { Route, Routes, Link } from "react-router-dom";

function Parent() {

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
                        <Route path="/" element={<BookListFunction />} />
                        <Route path="/form" element={<BookAddFunction />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Parent;