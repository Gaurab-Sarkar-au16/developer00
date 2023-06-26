const Book = (props) => {
  // console.log(props);
  const { id, img, title, author, number } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {/* {children} */}
      <span className="number">{`#${number + 1}`}</span>
    </article>
  );
};

export default Book;
