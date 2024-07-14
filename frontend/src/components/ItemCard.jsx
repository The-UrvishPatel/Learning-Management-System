import React, { useState } from 'react';
import './BookCard.css';
import { useSelector } from 'react-redux';

const ItemCard = ({ book }) => {
  const [quantity, setQuantity] = useState(1);
  // const LibraryId = useSelector(state => state.userData.LibraryID)


  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleClick = async () => {
    // const data = {
    //   LibraryID: LibraryId,
    //   name: book.volumeInfo.title,
    //   ISBN_13: book.volumeInfo?.industryIdentifiers?.[1]?.identifier,
    //   author: book.volumeInfo.authors[0],
    //   publisher: book.volumeInfo.publisher,
    //   year: book.volumeInfo.publishedDate,
    //   genre: book.volumeInfo.printType,
    //   mode: "offline",
    //   quantity: quantity,
    //   description: book.volumeInfo.description,
    //   borrowingPrice: (book.saleInfo.retailPrice.amount)/2
    // }

    // await axios.post("/add book", data)
    //   .then(response => console.log(response))
    //   .catch(err => console.log(err))
  }

  return (
    <div className="book-card" style={{width: '800px'}} >
      <div className="book-image">
        <img src={book.volumeInfo?.imageLinks?.thumbnail} alt={`${book.volumeInfo?.title} cover`} />
      </div>
      <div className="book-details">
        <h2>{book.volumeInfo?.title}</h2>
        <p><strong>Author:</strong> {book.volumeInfo?.authors}</p>
        <p><strong>Date:</strong> {book.volumeInfo?.publishedDate}</p>
        <p><strong>Publisher:</strong> {book.volumeInfo?.publisher}</p>
        <p><strong>ISBN:</strong> {book.volumeInfo?.industryIdentifiers?.[1]?.identifier}</p>
      </div>
      <div className="book-actions">
        <p><strong>Quantity:</strong></p>
        <div className="quantity-controls">
          <button onClick={decrementQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={incrementQuantity}>+</button>
        </div>
        <button onClick={handleClick} >Add Book</button>
      </div>
    </div>
  );
};

export default ItemCard;
