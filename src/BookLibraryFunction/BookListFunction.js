import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BookLibrary.css'
import { useNavigate } from 'react-router-dom';

export default function BookListFunction(props) {

    const [reciveFormValues, setReciveFormValues] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        setReciveFormValues(props.formValues)
    }, [props])

    const deleteFunction = (index) => {
        const listValues = reciveFormValues.filter((element, formIndex) => {
            return (
                index !== formIndex
            )
        })
        setReciveFormValues(listValues)
    }

    const editFunction = (listValue, index) => {
        props.editFunction(listValue, index)
        navigate('/form')
    }

    return (

        <div className='flex-container'>
            {(reciveFormValues).map((data, index) => {

                return (

                    <div key={index} className="mini-child-container">
                        <div className='list-container'>
                            <h1 className="child-heading"><span>{index + 1}</span>Book List</h1>
                            <div className='table-container'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Author Name</th>
                                            <th>Book Quantity</th>
                                            <th>Book Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='td-string'>{data.author}</td>
                                            <td className='td-integer'>{data.quantity}</td>
                                            <td className='td-integer'>{data.price}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='buttons'>
                                <Link to='/form'><button onClick={() => editFunction(data, index)} className="edit-button">Edit</button></Link>
                                <button onClick={() => deleteFunction(index)} className="delete-button">Delete</button>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}