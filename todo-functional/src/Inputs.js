import React, {useState, useEffect} from 'react'

const Inputs = () => {
    const [chrCount, setChrCount] = useState(' ');


    return (
        <form className='newTodoForm'>
            <input type="text" name='todo' className='newTodo' onChange={(e) => setChrCount(e.target.value.length)}/>
            <label htmlFor="todo" className='chr'>{chrCount}</label>
            <input type="submit" value="Add" className='submitBtn'/>
        </form>
    )
}

export default Inputs;
