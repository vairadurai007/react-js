import { useEffect, useState } from 'react';
import './BookLibrary.css'

export default function BookListFunction() {

    const getLocalStorageValue = JSON.parse(localStorage.getItem('bookCollections') || [])

    const [reciveFormValues, setReciveFormValues] = useState([...getLocalStorageValue])

    console.log(reciveFormValues);

    return (

        <div className='flex-container'>
            {(reciveFormValues || []).map((data, index) => {

                return (

                    <div key={index} className="mini-child-container">
                        <h1 className="child-heading">Book List <span>{index + 1}</span></h1>
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
                                    <td>{data.author}</td>
                                    <td>{data.quantity}</td>
                                    <td>{data.price}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="edit-button">Edit</button>
                    </div>
                )
            })}
        </div>
    )
}