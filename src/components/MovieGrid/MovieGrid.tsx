import styles from './MovieGrid.module.css';
import { type Movie } from '../../types/movies';

interface MovieGridProps {
    movies: Movie[];
    onSelect: (movie: Movie) => void; // Функція приймає вибраний фільм і нічого не повертає
}

const NO_IMAGE_PLACEHOLDER =
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="500" height="750" viewBox="0 0 500 750"><rect width="100%" height="100%" fill="%23cccccc"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="30" fill="%23666666">No Image</text></svg>';

export default function MovieGrid({ onSelect, movies }: MovieGridProps) {
    return (
        <ul className={styles.grid}>
            {movies.map((movie: Movie) => {
                return (
                    <li key={movie.id} onClick={() => onSelect(movie)}>
                        <div className={styles.card}>
                            <img
                                className={styles.image}
                                src={
                                    movie.poster_path
                                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                        : NO_IMAGE_PLACEHOLDER
                                }
                                alt={movie.title}
                                loading="lazy"
                            />
                            <h2 className={styles.title}>{movie.title}</h2>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
