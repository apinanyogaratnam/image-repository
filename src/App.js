import './App.css';
import data from './data.json';

function App() {
    console.log(data);

    const onSubmit = (e)  => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <div className="App">
            <h1>Image Repository</h1>
            <form onSubmit={onSubmit}>
                <input className="search-box" type="text" placeholder="Search..." />
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
