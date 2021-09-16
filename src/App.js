import './App.css';
import data from './data.json';
import { useState } from 'react';

function App() {
    const [search, setSearch] = useState('');
    console.log(data);

    const onSubmit = (e)  => {
        e.preventDefault();
        console.log(search);
    }

    return (
        <div className="App">
            <h1>Image Repository</h1>
            <form onSubmit={onSubmit}>
                <input className="search-box" type="text" value={search} placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
            <br/>
            {data.map(item => {
                return (
                    <>
                        <img className="image-container" src={require(`./images/${item.file_name}`).default} alt="image goes here"/>
                        <p>Title: {item.name}</p>
                        <p>Filename: {item.file_name}</p>
                        <p>Description: {item.description}</p>
                    </>
                );
            })}
        </div>
    );
}

export default App;
