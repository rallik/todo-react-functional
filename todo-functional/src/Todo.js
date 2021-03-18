import React, {useState, useEffect} from 'react';

const Todo = (props) => {
    const [ todoState, setTodoState ] = useState(props)
    const [ done, setDone ] = useState(todoState.done)

    const isDone = () => {
        setDone(true)
    }

    useEffect(() => {
        setTodoState(props)
    })
    return (
        <article className='card' key={todoState.id}>
            <div className={todoState.done ? 'done' : 'notdone'}></div>
            <h4 className={todoState.done ? 'txtDone' : 'txtNotDone'}>{todoState.todo}</h4>
            <button className='btn' >Done</button>
        </article>
    );
}

export default Todo;
