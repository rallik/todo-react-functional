import React, {useState, useEffect} from 'react';
import data from './todos.js';
import Todo from './Todo';

const List = (props) => {
    const [ clear, setClear ] = useState(props);
    const [ todos, setTodos ] = useState(data);
    console.log(todos)
    
    return (
        <React.Fragment>
            {
            todos.map((t) => {
                return (
                    <React.Fragment>
                        <Todo key={t.id} {...t}></Todo>
                    </React.Fragment>
                    );
            })
            }
            
        </React.Fragment>
    );
    
}

export default List;

