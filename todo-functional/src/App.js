import React, {useState} from 'react';
import List from './List';

const App = () => {
    return (
        <main>
            <section className='container'>
            <h1 className='title'>To-Do List</h1>    
            <List />
            </section>
        </main>
    );
}

export default App;