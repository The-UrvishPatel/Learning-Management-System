import React, { useState } from "react";
import PropTypes from "prop-types";
import "./BookCard.css";

const ItemCard = ({ book }) => {

  return (
    <div className="book-card" style={{ width: "800px" }}>
      <div className="book-image">
        <img
          src={book.volumeInfo?.imageLinks?.thumbnail}
          alt={`${book.volumeInfo?.title} cover`}
        />
      </div>
      <div className="book-details">
        <h2>{book.volumeInfo?.title}</h2>
        <p>
          <strong>Author:</strong> {book.volumeInfo?.authors}
        </p>
        <p>
          <strong>Date:</strong> {book.volumeInfo?.publishedDate}
        </p>
        <p>
          <strong>Publisher:</strong> {book.volumeInfo?.publisher}
        </p>
        <p>
          <strong>ISBN:</strong>{" "}
          {book.volumeInfo?.industryIdentifiers?.[0]?.identifier}
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
