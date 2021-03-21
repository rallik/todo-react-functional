import React, {useState} from 'react';
import List from './List';
import Inputs from './Inputs'

const App = () => {
    return (
        <main>
            <section className='container'>
            <h1 className='title'>To-Do List</h1>    
            <List />
            <Inputs />
            </section>
        </main>
    );
}

export default App;