import axios from 'axios';
import { type Movie } from '../types/movie';

interface FetchMoviesResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

interface ApiErrorResponse {
    status_code: number;
    status_message: string;
    success: boolean;
}

const myKey = import.meta.env.VITE_TMDB_TOKEN;

const tmdbClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${myKey}`,
    },
});

export default async function fetchMovies(newQuery: string): Promise<Movie[]> {
    if (!newQuery.trim()) {
        return [];
    }

    try {
        const { data } = await tmdbClient.get<FetchMoviesResponse>(
            '/search/movie',
            {
                params: { query: newQuery.trim() },
            },
        );

        return data.results;
    } catch (error) {
        if (axios.isAxiosError<ApiErrorResponse>(error)) {
            console.error(
                'Axios message:',
                error.response?.data.status_message,
            );
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
}
