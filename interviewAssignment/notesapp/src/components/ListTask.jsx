import React, { useEffect, useState } from "react";
import BookCard from "./Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useFirebase } from "../context/Firebase";

// read book
const HomePage = () => {
  const firebase = useFirebase();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    firebase.listAllBooks().then((books) => setBooks(books.docs));
  }, []);
  return (
    <div className="container mt-5">
      <CardGroup>
        {books.map((book) => (
          <BookCard key={book.id} id={book.id} {...book.data()} />
        ))}
      </CardGroup>
    </div>
  );
};

export default HomePage;
