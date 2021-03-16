import React, {useState} from 'react';
import todos from './todos.js';
import List from './List'

const App = () => {
    console.log(typeof todos)
    return (
        <main>
            <section className='container'>
            {
                todos.map((todo) => {
                    return (
                        <List key={todo.id} {...todo}></List>
                    );
                })
            }
            </section>
        </main>
    );
}

export default App;