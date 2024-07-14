import React, { useState } from 'react';
import axios from 'axios';
import ItemCard from '../../ItemCard';

const AddBooks = () => {
  const [searchParams, setSearchParams] = useState({
    isbn: '',
    title: '',
    author: '',
    publisher: '',
    year: '',
    genre: '',
    quantity: ''
  });

  const [books, setBooks] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchParams({
      ...searchParams,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Constructing the query based on filled fields
      const queryParams = Object.entries(searchParams)
        .filter(([key, value]) => value !== '')
        .map(([key, value]) => `${key}:${value}`)
        .join('+');

      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${queryParams}&key=AIzaSyALj-xDrGo7TooSW_a05EF3gOI0YqB3QZs`
      );
      console.log("Books", response.data.items);
      setBooks(response.data.items);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="isbn"
          value={searchParams.isbn}
          onChange={handleChange}
          placeholder="Search by ISBN..."
        />
        <input
          type="text"
          name="title"
          value={searchParams.title}
          onChange={handleChange}
          placeholder="Search by title..."
        />
        <input
          type="text"
          name="author"
          value={searchParams.author}
          onChange={handleChange}
          placeholder="Search by author..."
        />
        <input
          type="text"
          name="publisher"
          value={searchParams.publisher}
          onChange={handleChange}
          placeholder="Search by publisher..."
        />
        <input
          type="text"
          name="year"
          value={searchParams.year}
          onChange={handleChange}
          placeholder="Search by year..."
        />
        <input
          type="text"
          name="genre"
          value={searchParams.genre}
          onChange={handleChange}
          placeholder="Search by genre..."
        />
        <input
          type="text"
          name="quantity"
          value={searchParams.quantity}
          onChange={handleChange}
          placeholder="Search by quantity..."
        />
        <button type="submit">Search</button>
      </form>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {books.map((book) => (
          <div key={book.id} >
            <ItemCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddBooks;
