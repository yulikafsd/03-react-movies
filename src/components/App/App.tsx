import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
// import css from './App.module.css'
import { type Movie } from '../../types/movies';
import SearchBar from '../SearchBar/SearchBar';
import fetchMovies from '../../services/movieService';

function App() {
    const [movies, setMovies] = useState<Movie[]>([]);

    const handleSearch = async (query: string) => {
        // Clear previous search results
        setMovies([]);

        // Fetch new data
        try {
            const result = await fetchMovies(query);

            // Empty movies if no results and inform user
            if (result.length === 0) {
                toast.error('No movies found for your request.');
                setMovies([]);
                return;
            }

            // Set movies if result > 0
            setMovies(result);
        } catch (error) {
            // Inform user if smth went wrong
            toast.error('Failed to fetch movies. Please try again.');
            console.log(error);
        }
    };

    return (
        <>
            <SearchBar onSubmit={handleSearch} />
            <Toaster position="top-center" />
        </>
    );
}

export default App;
