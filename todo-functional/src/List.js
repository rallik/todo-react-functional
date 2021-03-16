import React, {useState} from 'react';

const List = ({props}) => {
    const { id, todo, done } = props;
    const [ complete, setComplete ] = useState(done)
    const doneBtn = () => {
        setComplete((old) => {
            return !old;
        })
    }
    return (
        <article className='card' id={id}>
            <h4>{todo}</h4>
        </article>
    );
}

export default List;