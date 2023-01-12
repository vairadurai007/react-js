import { Link } from 'react-router-dom';
import './BookLibrary.css'
import { useNavigate } from 'react-router-dom';

export default function BookListFunction(props) {

    const { formValues } = props
    const navigate = useNavigate();

    const deleteListData = (index) => {
        const listValues = formValues.filter((element, formIndex) => {
            return (index !== formIndex)
        })
        props.deleteListData(listValues)
    }

    const editListData = (listValue, listIndex) => {
        props.editListData(listValue)
        props.listIndex(listIndex)
        navigate('/form')
    }

    return (
        <div className='flex-container'>
            {(formValues).map((data, index) => {
                return (
                    <div key={index} className="flex-container-items">
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

                                <Link to='/form'>
                                    <button
                                        onClick={() => editListData(data, index)}
                                        className="edit-button">Edit
                                    </button>
                                </Link>

                                <button onClick={() => deleteListData(index)}
                                    className="delete-button">Delete
                                </button>

                            </div>

                        </div>
                    </div>
                )
            })}

        </div>
    )
}