import React, {useState} from 'react';
import List from './List';

const App = () => {
    const [clear, setClear] = useState(false)
    console.log(typeof todos)
    const clearList = () => {
        setClear(true)
    }
    return (
        <main>
            <section className='container'>
            <h1 className='title'>To-Do List</h1>    
            <List {...clear} />
            <button className='clearAll' onClick={clearList}>Clear All</button>
            </section>
        </main>
    );
}

export default App;