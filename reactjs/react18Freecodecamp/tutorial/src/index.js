import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "./images/bookImage1.jpg",
    id: 1,
  },
  {
    author: "Morgan Housel",
    title: "The Psychology Of Money",
    img: "./images/bookImage2.jpg",
    id: 2,
  },
];

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        // console.log(book)
        // const { img, title, author, id } = book;
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = (props) => {
  // console.log(props);
  const {img, title, author} = props
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {/* {children} */}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
