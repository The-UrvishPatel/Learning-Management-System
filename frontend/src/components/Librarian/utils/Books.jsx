import React, { useEffect, useState } from 'react';
import ItemCardLibrarian from './ItemCardLibrarian';
import { useSelector } from 'react-redux';

const Books = () => {
    const [books, setBooks] = useState([]);
    // const userData = useSelector(state => state.auth.userData);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.post('https://api.example.com/books', userData);
                const data = await response.json();
                setBooks(data.items);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div>
            {books.length > 0 ? (
                books.map((book, index) => (
                    <ItemCardLibrarian book={book} />
                ))
            ) : (
                <p>No books available.</p>
            )}
        </div>
    );
};

export default Books;
