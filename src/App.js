import './App.css';
import data from './data.json';
import { useEffect, useState } from 'react';

function App() {
    const [search, setSearch] = useState('');
    const [liveData, setLiveData] = useState([]);

    useEffect(() => {
        setLiveData(data);
        console.log(data);
    }, [data]);

    const onSubmit = (e)  => {
        e.preventDefault();
        console.log(search);
        
        if (!search) {
            alert("cannot leave search box blank");
            return;
        }

        // filter images here
        setLiveData(filter_by_search(search));
        
        setSearch('');
    }

    const filter_by_search = (search_text) => {
        return data.filter(image => {
            return image.description.includes(search_text);
        });
    }

    return (
        <div className="App">
            <h1>Image Repository</h1>
            <form onSubmit={onSubmit}>
                <input className="search-box" type="text" value={search} placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
                <input type="submit" value="Submit" />
                <button>Reset</button>
            </form>
            <br/>
            {liveData.map(item => {
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
