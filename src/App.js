import './App.css';
import data from './data.json';

function App() {
    console.log(data);

    return (
        <div className="App">
            {data.map(item => {
                return (
                    <img className="image-container" src={require(`./images/${item.file_name}`).default} alt="image goes here"/>
                );
            })}
        </div>
    );
}

export default App;
