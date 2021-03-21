import React, {useState, useEffect} from 'react';

const Todo = (props) => {
    console.log(props)
    const {id, done, todo, fullList, updateTodos} = props;
    

    const markAsDone = () => {
        console.log(fullList)
        let updatedList = fullList.filter((td) => id !== td.id)
        updateTodos(updatedList)
    }


    return (
        <article className='card' key={id}>
            <div className={done ? 'done' : 'notdone'}></div>
            <h4 className={done ? 'txtDone' : 'txtNotDone'}>{todo}</h4>
            <button className='btn' onClick={markAsDone}>Done</button>
        </article>
    );
}

export default Todo;
