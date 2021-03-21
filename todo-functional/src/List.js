import React, {useState, useEffect} from 'react';
import data from './todos.js';
import Todo from './Todo';

const List = () => {
    const [ todos, setTodos ] = useState(data);
    useEffect(() =>{ setTodos(todos)}, [todos]);
    return (
        <React.Fragment>
            {
            todos.map((t) => {
                return <Todo id={t.id} fullList={todos} updateTodos={setTodos} {...t}></Todo>;
            })
            }
            
        </React.Fragment>
    );
    
}

export default List;

