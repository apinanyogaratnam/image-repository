import './App.css';
import data from './data.json';
import { useEffect, useState } from 'react';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/posts', postRoutes);

app.get('/', (req, res) => {
    res.send("Home page");
});

mongoose.connect(
    process.env.DATABASE_URL, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to database')
);

app.listen(3000, () => console.log("server started on port 3000"));

function App() {
    const [search, setSearch] = useState('');
    const [liveData, setLiveData] = useState([]);

    useEffect(() => {
        setLiveData(data);
    }, [data]);

    const onSubmit = (e)  => {
        e.preventDefault();
        
        if (!search) {
            setLiveData(data);
            return;
        }

        // filter images here
        setLiveData(filter_by_search(search));
        
        // set search to empty string
        setSearch('');
    }

    const filter_by_search = (search_text) => {
        return data.filter(image => {
            return image.description.includes(search_text) || image.name.includes(search_text);
        });
    }

    return (
        <div className="App">
            <h1>Image Repository</h1>
            <form onSubmit={onSubmit}>
                <input className="search-box" type="text" value={search} placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
            <br/>
            {liveData.map(item => {
                return (
                    <div key={item.id}>
                        <img className="image-container" src={require(`./images/${item.file_name}`).default} alt="image goes here"/>
                        <p>Title: {item.name}</p>
                        <p>Filename: {item.file_name}</p>
                        <p>Description: {item.description}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default App;
