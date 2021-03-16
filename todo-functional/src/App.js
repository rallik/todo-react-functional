import React, {useState} from 'react';
import data from './todos.js';
import List from './List'

const App = () => {
    const [todos, setTodos] = useState(data)
    console.log(typeof todos)
    const clearList = () => {
        setTodos([])
    }
    return (
        <main>
            <section className='container'>
            <h1 className='title'>To-Do List</h1>    
            {
                todos.map((todo) => {
                    return (
                        <List key={todo.id} {...todo}></List>
                    );
                })
            }
            <button className='clearAll' onClick={clearList}>Clear All</button>
            </section>
        </main>
    );
}

export default App;