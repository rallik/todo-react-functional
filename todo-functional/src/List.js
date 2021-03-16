import React, {useState} from 'react';

const List = (props) => {
    const { id, todo, done } = props;
    // const [ complete, setComplete ] = useState({})
    const doneBtn = () => {
        // setComplete((old) => {
        //     return !old;
        // })
        console.log("heheheh")
    }
    return (
        <article className='card' id={id}>
            <div className='done'></div>
            <h4 className='txt'>{todo}</h4>
            <button className='btn' onClick={doneBtn}>Done</button>
        </article>
    );
}

export default List;

