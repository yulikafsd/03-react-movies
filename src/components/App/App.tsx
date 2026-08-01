import { useEffect, useState } from 'react';
// import css from './App.module.css'
import fetchMovies from '../../services/movieService';

function App() {
    useEffect(() => {
        fetchMovies('cat');
    }, []);
    return <></>;
}

export default App;
