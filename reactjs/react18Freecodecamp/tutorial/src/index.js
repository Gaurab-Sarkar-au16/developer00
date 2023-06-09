import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

function Booklist() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  const author = "James Clear"
  const title = "Atomic Habits"
  return (

    <article className="book">
      <img src="./images/bookImage1.jpg" alt="Atomic Habits" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p></p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
