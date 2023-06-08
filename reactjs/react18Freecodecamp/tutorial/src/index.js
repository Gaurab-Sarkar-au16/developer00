import React from "react";
import ReactDOM from "react-dom/client";

import './index.css'

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
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg"
    alt="Atomic Habits"
  />
);
const Title = () => <h2>Atomic Habits</h2>;
const Author = () => {
  return <h4>James Clear</h4>;
};

const Message = () => {
  return <p>this is my message</p>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
