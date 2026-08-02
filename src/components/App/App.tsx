/* Libs */
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

/* Components */
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import MovieGrid from '../MovieGrid/MovieGrid';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import MovieModal from '../MovieModal/MovieModal';

/* Types and services */
import { type Movie } from '../../types/movie';
import fetchMovies from '../../services/movieService';

/* Styles */
import styles from './App.module.css';

function App() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    const handleSearch = async (query: string) => {
        // Reset isError
        if (isError) {
            setIsError(false);
        }

        // Show loader
        setIsLoading(true);

        // Clear previous search results
        setMovies([]);

        try {
            // Fetch new data
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

            //Show ErrorMessage
            setIsError(true);
        } finally {
            // Hide loader
            setIsLoading(false);
        }
    };

    const openModal = (movie: Movie) => setSelectedMovie(movie);
    const closeModal = () => setSelectedMovie(null);

    return (
        <div className={styles.app}>
            <Toaster position="top-center" />
            <SearchBar onSubmit={handleSearch} />
            {isLoading && <Loader />}
            {isError && <ErrorMessage />}
            {movies.length > 0 && (
                <MovieGrid onSelect={openModal} movies={movies} />
            )}
            {selectedMovie && (
                <MovieModal onClose={closeModal} movie={selectedMovie} />
            )}
        </div>
    );
}

export default App;
