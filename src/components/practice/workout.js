
import React, { useState } from "react"
// import { ReactDOM } from "react";
import './practice.css'



function Workout() {
    const [tasks, settask] = useState([
        {
            text: 'Wake up',
            isCompleted: false
        },
        {
            text: 'Boos Up',
            isCompleted: false
        }, {
            text: 'Brush up',
            isCompleted: false
        }
    ]);

    return (
        <div className="list-of-task">
                    <h1 className="heading">To-Do-List</h1>
            {tasks.map((task,index) => {
                return(
                <div className="list-of-task-content">
                    <div>
                    {index}
                    {task.text}
                    </div>
                </div>
           ) })}

        </div>
    );
}




// ReactDOM.render(<Workout/>,document.getElementById('root'));
export default Workout;