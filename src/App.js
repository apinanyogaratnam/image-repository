import logo from './logo.svg';
import './App.css';
import data from './data.json';

function App() {
    console.log(data);

    return (
        <div className="App">
            {data.map(item => {
                return (
                    <h1>{item.file_name}</h1>
                );
            })}
        </div>
    );
}

export default App;
