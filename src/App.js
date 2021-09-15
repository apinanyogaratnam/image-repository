import './App.css';
import data from './data.json';

function App() {
    console.log(data);

    return (
        <div className="App">
            <h1>Image Repository</h1>
            <form>
                <input className="search-box" type="text" placeholder="Search..." />
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
