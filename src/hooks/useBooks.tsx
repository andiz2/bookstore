import {useEffect, useState} from 'react';
import axios from 'axios';
import {Book} from '../types';

const useBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios
            .get<Book[]>('http://localhost:3000/books')
            .then((response) => setBooks(response.data))
            .catch((err) => setError('Failed to fetcg books' + err));

    }, [])
    
    return {books, error};
}

export default useBooks;