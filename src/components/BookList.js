import BookShow from "./BookShow";
import "../App.css";
import { useState } from "react";
import DisplayBook from "./DisplayBook";

export default function BookList({ books }) {
  console.log(books);

  const [isInView, setIsInView] = useState(false);

  const [cBook, setcBook] = useState(null);

  const showBook = (book) => {
    console.log(book);
    console.log("clicked");
    setcBook(book);
    setIsInView(true);
  };

  const handleClick = (e) => {
    setIsInView(e);
  };

  const renderedBooks = books.map((book) => {
    return (
      <div key={book.id} onClick={() => showBook(book)}>
        <BookShow book={book} />
      </div>
    );
  });

  return (
    <div>
      {isInView ? (
        <DisplayBook book={cBook} handleChange={handleClick} />
      ) : (
        <div>
          <div className="books">{renderedBooks}</div>
        </div>
      )}
    </div>
    // <div>
    //   <div className="books">{renderedBooks}</div>
    // </div>
  );
}
